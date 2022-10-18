import { createSlice } from "@reduxjs/toolkit";
import { ItemType } from "../categories/categories.types";
import { CartItemType, CartStateType } from "./cart.types";


const initialState: CartStateType =  {
    cartContent: [],
    cartVisibility: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
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




const updateCartContent = (cartContent: CartStateType) => cartSlice.actions.setCart(cartContent);    



export const addItemToCart = (productToAdd: ItemType, cartContent: CartItemType[]) => {
    

    if (cartContent.length === 0){
        const newProduct: CartItemType = {quantity: 1, ...productToAdd} ;
       
        return updateCartContent({
            cartContent: [newProduct] ,
            
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

export const removeItemFromCart = (productToRemove: ItemType, cartContent:CartItemType[]) => {

    const existingItem: CartItemType | undefined = cartContent.find(
        (item) => item.id === productToRemove.id
    );

    if(existingItem && existingItem.quantity === 1){
       
        return updateCartContent({
            cartContent: cartContent.filter(
                (item) => item.id !== productToRemove.id),
            
        })
                
    }
    
    return updateCartContent({
        cartContent: cartContent.map((item) => 
            item.id === productToRemove.id
            ? {...item, quantity: item.quantity - 1}
            :item),
        
    })
}

export const removeItemTypeFromCart = (productToRemove:ItemType, cartContent: CartItemType[]) => {
        
    return updateCartContent({
        cartContent: cartContent.filter((item) =>
            item.id !== productToRemove.id),
       
    })
}

export const setCartVisibility = (value:boolean) => cartSlice.actions.setVisibility(value);

export default cartSlice.reducer;