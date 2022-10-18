import { createSelector } from "reselect";
import { CartItemType, CartStateType } from "./cart.types";
import { RootStateType } from "../store";

const selectCartReducer = (state: RootStateType): CartStateType => state.cart;

export const selectCartContent = createSelector(
    [selectCartReducer],
    (cart) => cart.cartContent 
);


export const selectCartCount = createSelector(
    [selectCartContent],
    (cartContent) => cartContent.reduce((total, cartItem) => total + cartItem.quantity, 0)  
);
    
    export const selectCartTotal = createSelector(
        [selectCartContent],
        (cartContent) => cartContent.reduce((total, cartItem) => total + cartItem.price*cartItem.quantity, 0)
);


/* export const selectCart = createSelector(
    [selectCartContent, selectCartCount, selectCartTotal],
    (cartContent: CartItemType[], cartCount: number, cartTotal: number) => {
        return{
            cartContent: cartContent,
            cartCount: cartCount,
            cartTotal: cartTotal
        }
    }
); */

export const selectCart = createSelector(
    selectCartContent,
    (cartContent: CartItemType[]) => {
        return{
            cartContent: cartContent,
            cartCount: cartContent.reduce((total, cartItem) => total + cartItem.quantity, 0),
            cartTotal: cartContent.reduce((total, cartItem) => total + cartItem.price*cartItem.quantity, 0)
        }
    }
);

export const selectCartVisibility = createSelector(
    [selectCartReducer],
    (cart) => cart.cartVisibility
);
