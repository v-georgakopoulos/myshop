import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json"


export const CategoriesContext = createContext({
products:[]
})

export const CategoriesProvider = ({children}) => {

    const [products,setProducts] = useState(PRODUCTS)

    const value = {products,setProducts}

    return<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}