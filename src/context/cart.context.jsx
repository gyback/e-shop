import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CART_ACTION_TYPES = {
    SET_CART_CONTENT: 'SET_CART_CONTENT',
    SET_CART_VISIBILITY: 'SET_CART_VISIBILITY'
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {

        case 'SET_CART_CONTENT':
            return {
                ...state,
                ...payload
            }

        case 'SET_CART_VISIBILITY':
            return {
                ...state,
                cartVisibility: payload
            }

        default:
            throw new Error(`Unhandled type ${type}  in cartReducer`)
    }
}

const INITIAL_STATE = {
    cartContent: [],
    cartCount: 0,
    cartTotal: 0,
    cartVisibility: false,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    removeItemTypeFromCart: () => {},
    toggleCartVisibility: () => {},
    setCartVisibility: () => {}
}



export const CartContext = createContext({
    cartContent: [],
    cartVisibility: false,
    toggleCartVisibility: () => {}
})

export const CartProvider = ({children}) => {
    
    const [{cartContent, cartCount, cartTotal, cartVisibility}, dispatch] = useReducer(cartReducer, INITIAL_STATE);
   
    const updateCartContent = (newContent) => {
        dispatch(createAction(
            CART_ACTION_TYPES.SET_CART_CONTENT,
            newContent
        ))
    }


    const addItemToCart = (productToAdd) => {
        if (!cartContent){
            const newProduct = {quantity: 1, ...productToAdd};
            
            updateCartContent({
                cartContent:[ newProduct ],
                cartCount: 1,
                cartTotal: productToAdd.price
            })
            return
        }
        
        const existingCartItem = cartContent.find((item => item.id === productToAdd.id));
        if(existingCartItem){
            

            updateCartContent({
                cartContent: (cartContent.map((item) =>
                        item.id === productToAdd.id
                            ? {...item, quantity: item.quantity + 1}
                            :item)),
                    cartCount: cartCount + 1,
                    cartTotal: cartTotal + productToAdd.price
            })
            
            return
        }

        
        updateCartContent({
            cartContent: [...cartContent, {...productToAdd, quantity: 1}],
            cartCount: cartCount + 1,
            cartTotal: cartTotal + productToAdd.price
        })
        
    }

    const removeItemFromCart = (productToRemove) => {

        const existingItem = cartContent.find(
            (item) => item.id === productToRemove.id
        );
    
        if(existingItem.quantity === 1){
           
            updateCartContent({
                cartContent: cartContent.filter(
                    (item) => item.id !== productToRemove.id),
                cartCount: cartCount - 1,
                cartTotal: cartTotal - productToRemove.price
            })
            
            return
            
        }
        
        updateCartContent({
            cartContent: cartContent.map((item) => 
                item.id === productToRemove.id
                ? {...item, quantity: item.quantity - 1}
                :item),
            cartCount: cartCount - 1,
            cartTotal: cartTotal - productToRemove.price
        })
    }

    const removeItemTypeFromCart = (productToRemove) => {

        const countToRemove = productToRemove.quantity;
        const totalToRemove = productToRemove.price * countToRemove;
            
        updateCartContent({
            cartContent: cartContent.filter((item) =>
                item.id !== productToRemove.id),
            cartCount: cartCount - countToRemove,
            cartTotal: cartTotal - totalToRemove
        })
    }

    const toggleCartVisibility = () => {
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_VISIBILITY,!cartVisibility));
    }

    const setCartVisibility = (value) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_VISIBILITY,value));
    }

    const value = { cartContent, cartCount, cartTotal, cartVisibility, addItemToCart, removeItemFromCart, removeItemTypeFromCart, toggleCartVisibility, setCartVisibility}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}