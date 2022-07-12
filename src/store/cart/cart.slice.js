import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartContent: [],
        
        cartVisibility: false,
    },
    reducers:{
        setCart: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        setVisibility: (state, action) => {
            return {
                ...state,
                cartVisibility: action.payload
            }
        }
    }
})




const updateCartContent = (cartContent) => cartSlice.actions.setCart(cartContent);    



export const addItemToCart = (productToAdd, cartContent) => {
    

    if (cartContent.length == 0){
        const newProduct = {quantity: 1, ...productToAdd};
       
        return updateCartContent({
            cartContent:[ newProduct ],
            
        })
        
    }

    const existingCartItem = cartContent.find((item => item.id === productToAdd.id));
    if(existingCartItem){
        

        return updateCartContent({
            cartContent: (cartContent.map((item) =>
                    item.id === productToAdd.id
                        ? {...item, quantity: item.quantity + 1}
                        :item)),
                
        })
        
        
    }

    
    return updateCartContent({
        cartContent: [...cartContent, {...productToAdd, quantity: 1}],
        
    })
    
}

export const removeItemFromCart = (productToRemove, cartContent) => {

    const existingItem = cartContent.find(
        (item) => item.id === productToRemove.id
    );

    if(existingItem.quantity === 1){
       
        return updateCartContent({
            cartContent: cartContent.filter(
                (item) => item.id !== productToRemove.id),
            
        })
        
        return
        
    }
    
    return updateCartContent({
        cartContent: cartContent.map((item) => 
            item.id === productToRemove.id
            ? {...item, quantity: item.quantity - 1}
            :item),
        
    })
}

export const removeItemTypeFromCart = (productToRemove, cartContent) => {
        
    return updateCartContent({
        cartContent: cartContent.filter((item) =>
            item.id !== productToRemove.id),
       
    })
}

export const setCartVisibility = (value) => cartSlice.actions.setVisibility(value);

export default cartSlice.reducer;