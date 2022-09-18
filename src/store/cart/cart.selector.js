import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartContent = createSelector(
    [selectCartReducer],
    (cart) => cart.cartContent 
);


export const selectCartCount = createSelector(
    [selectCartContent],
    (cartContent) => cartContent.reduce((total, cartItem) => total + cartItem.quantity, 0)  
)
    
    export const selectCartTotal = createSelector(
        [selectCartContent],
        (cartContent) => cartContent.reduce((total, cartItem) => total + cartItem.price*cartItem.quantity, 0)
)

export const selectCart = createSelector(
    [selectCartContent, selectCartCount, selectCartTotal],
    (cartContent, cartCount, cartTotal) => {
        return{
            cartContent: cartContent,
            cartCount: cartCount,
            cartTotal: cartTotal
        }
    }
)

export const selectCartVisibility = createSelector(
    [selectCartReducer],
    (cart) => cart.cartVisibility
)
