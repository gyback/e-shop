import { createContext, useEffect, useState } from "react";

const addCartItem = (cartContent, productToAdd) => {

    if (!cartContent){
        const newProduct = {quantity: 1, ...productToAdd};
        return [ newProduct];
    }
    
    const existingCartItem = cartContent.find((item => item.id === productToAdd.id));
    if(existingCartItem){
        return cartContent.map((item) =>
            item.id === productToAdd.id
                ? {...item, quantity: item.quantity + 1}
                :item
        );
    }
    
    return [...cartContent, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartContent, productToRemove) => {
    const existingItem = cartContent.find(
        (item) => item.id === productToRemove.id
    );

    if(existingItem.quantity === 1){
        return cartContent.filter(
            (item) => item.id !== productToRemove.id
        );
    }
  
    return cartContent.map((item) => 
    item.id === productToRemove.id
    ? {...item, quantity: item.quantity - 1}
    :item
);
}

const removeCartItemType = (cartContent, productTypeToRemove) => {
    return cartContent.filter((item) =>
        item.id !== productTypeToRemove.id
    );
}

export const CartContext = createContext({
    cartContent: [],
    setCartContent: () => {},
    cartVisibility: false,
    setCartVisibility: () => {}
})

export const CartProvider = ({children}) => {
    const [cartContent, setCartContent] = useState();
    const [cartVisibility, setCartVisibility] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);


    useEffect(() => {
        const newCartCount = cartContent
        ? cartContent.reduce((inc, item) => inc + item.quantity, 0)
        : 0;
        setCartCount(newCartCount);
    }, [cartContent]);

    useEffect(()=> {
        const newCartTotal = cartContent
        ? cartContent.reduce((inc, item) => inc + item.quantity*item.price, 0)
        : 0;
        setCartTotal(newCartTotal);
    },[cartContent]);

    const addItemToCart = (productToAdd) => {
        setCartContent(addCartItem(cartContent, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartContent(removeCartItem(cartContent, productToRemove));
    }

    const removeItemTypeFromCart = (productToRemove) => {
        setCartContent(removeCartItemType(cartContent, productToRemove));
    }

    const value = { cartContent, addItemToCart, removeItemFromCart, removeItemTypeFromCart, cartVisibility, setCartVisibility, cartCount, cartTotal}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}