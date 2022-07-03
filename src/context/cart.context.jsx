import { createContext, useReducer } from "react";

export const CART_ACTION_TYPES = {
    ADD_TO_CART_CONTENT: 'ADD_TO_CART_CONTENT',
    REMOVE_FROM_CART_CONTENT: 'REMOVE_FROM_CART_CONTENT',
    REMOVE_PRODUCT_TYPE: 'REMOVE_PRODUCT_TYPE',
    RESET_CART_CONTENT: 'RESET_CART_CONTENT', 
    TOGGLE_CART_VISIBILITY: 'TOGGLE_CART_VISIBILITY',
    HIDE_CART: 'HIDE_CART'
}

const cartReducer = (state, action) => {
    const {type, payload} = action;
    const {cartContent} = state;

    switch(type) {

        case 'ADD_TO_CART_CONTENT':

            if (!cartContent){
                const newProduct = {quantity: 1, ...payload};
                return {
                    ...state,
                    cartContent:[ newProduct ],
                    cartCount: 1,
                    cartTotal: payload.price
                };
            }
            
            const existingCartItem = cartContent.find((item => item.id === payload.id));
            if(existingCartItem){
                return {
                    ...state,
                    cartContent: (cartContent.map((item) =>
                        item.id === payload.id
                            ? {...item, quantity: item.quantity + 1}
                            :item)),
                    cartCount: state.cartCount + 1,
                    cartTotal: state.cartTotal + payload.price    
                }
                
            }
            
            return {
                ...state,
                cartContent: [...cartContent, {...payload, quantity: 1}],
                cartCount: state.cartCount + 1,
                cartTotal: state.cartTotal + payload.price
            };


        case 'REMOVE_FROM_CART_CONTENT':

            const existingItem = cartContent.find(
                (item) => item.id === payload.id
            );
        
            if(existingItem.quantity === 1){
                return {
                    ...state,
                    cartContent: cartContent.filter(
                        (item) => item.id !== payload.id),
                    cartCount: state.cartCount - 1,
                    cartTotal: state.cartTotal - payload.price
                }
            }
          
            return {
                ...state,
                cartContent: cartContent.map((item) => 
                    item.id === payload.id
                    ? {...item, quantity: item.quantity - 1}
                    :item),
                cartCount: state.cartCount - 1,
                cartTotal: state.cartTotal - payload.price
                }

        case 'REMOVE_PRODUCT_TYPE':
            const countToRemove = payload.quantity;
            const totalToRemove = payload.price * countToRemove;
            return {
                ...state,
                cartContent: cartContent.filter((item) =>
                    item.id !== payload.id),
                cartCount: state.cartCount - countToRemove,
                cartTotal: state.cartTotal - totalToRemove
            }

        case 'RESET_CART_CONTENT':
            return {
                ...state,
                cartContent: [],
                cartCount: 0,
                cartTotal: 0
            }


        case 'TOGGLE_CART_VISIBILITY': 
            return {
                ...state,
                cartVisibility: !state.cartVisibility
            }

        case 'HIDE_CART':
            return {
                ...state,
                cartVisibility: false
            }

        default:
            throw new Error(`Unhandled type ${type}  in cartReducer`)
    }
}

const INITIAL_STATE = {
    cartContent: [],
    cartCount: 0,
    cartTotal: 0,
    cartVisibility: false
}



export const CartContext = createContext({
    cartContent: [],
    cartVisibility: false,
    toggleCartVisibility: () => {}
})

export const CartProvider = ({children}) => {
    
    const [{cartContent, cartCount, cartTotal, cartVisibility}, dispatch] = useReducer(cartReducer, INITIAL_STATE);
   



    const addItemToCart = (productToAdd) => {
        dispatch({type:CART_ACTION_TYPES.ADD_TO_CART_CONTENT, payload: productToAdd});
    }

    const removeItemFromCart = (productToRemove) => {
        dispatch({type: CART_ACTION_TYPES.REMOVE_FROM_CART_CONTENT, payload: productToRemove});
    }

    const removeItemTypeFromCart = (productToRemove) => {
        dispatch({type: CART_ACTION_TYPES.REMOVE_PRODUCT_TYPE, payload:  productToRemove});
    }

    const toggleCartVisibility = () => {
        dispatch({type: CART_ACTION_TYPES.TOGGLE_CART_VISIBILITY});
    }

    const hideCart = () => {
        dispatch({type: CART_ACTION_TYPES.HIDE_CART});
    }

    const value = { cartContent, cartCount, cartTotal, cartVisibility, addItemToCart, removeItemFromCart, removeItemTypeFromCart, toggleCartVisibility, hideCart}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}