import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
    const [ products, setProducts ] = useState([]);
    const [ APIProductsList, setAPIProductsList ] = useState([]);

    useEffect(()=>{
        api.get()
            .then((res)=> {
                setProducts(res.data);
                setAPIProductsList(res.data);
            })
            .catch((err)=> console.log(err))
    }, [])

    return (
        <ProductsContext.Provider value={{ products, setProducts, APIProductsList }}>
            {children}
        </ProductsContext.Provider>
    )
}