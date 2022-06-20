import { createContext, useEffect, useState } from "react";

import PRODUCTS from '../assets/shop-data.json';

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};

    // useEffect(()=> {
    //     fetch()
    //     .then((response)=>{
    //         response.json()
    //     }).then((data) => {
    //         setProducts(data)
    //     })

    // }, []);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}