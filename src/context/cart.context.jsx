import { createContext, useState } from "react";

export const CartContext = createContext({
    products: [],
    setProducts: () => {},
    cartVisibility: false,
    setCartVisibility: () => {}

})

export const CartProvider = ({children}) => {
    const [products, setProducts] = useState();
    const [cartVisibility, setCartVisibility] = useState(false);
    const value = {products, setProducts, cartVisibility, setCartVisibility}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}