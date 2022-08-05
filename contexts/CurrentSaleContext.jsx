import { createContext, useContext, useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const CurrentSaleContext = createContext({});

export const CurrentSaleProvider = ({ children }) => {
    const { products } = useContext(ProductsContext);
    const [ localStorageSale, setLocalStorageSale ] = useState([]);
    const [ currentSale, setCurrentSale ] = useState(localStorageSale || []);
    
    useEffect(()=> {
        const savedCurrentSale = JSON.parse(localStorage.getItem("Burguer@CurrentSale"));
        setLocalStorageSale(savedCurrentSale);
    },[])

    const addToCart = (productID) => {
        const product = products.find((product)=> product.id === productID);

        if (currentSale.some((product)=> product.id === productID)){
            const newCurrentSale = [];
            currentSale.forEach((product)=> {
                if (product.id === productID){
                    product = {...product, numberOfUnits: product.numberOfUnits + 1}
                    newCurrentSale = [...newCurrentSale, product]
                }else {
                    newCurrentSale = [...newCurrentSale, product]
                }
            })
            setCurrentSale(newCurrentSale);
        
        }else {
            product = {...product, numberOfUnits: 1}
            setCurrentSale([...currentSale, product]);
        }
        localStorage.setItem("Burguer@CurrentSale", JSON.stringify(currentSale));
    }

    const removeFromCart = (productID, removeAllUnits) => {
        const productInCart = currentSale.find((product)=> product.id === productID);
        
        if (productInCart.numberOfUnits === 1 || removeAllUnits){
            const newCurrentSale = currentSale.filter((product)=> product.id !== productID);
            setCurrentSale(newCurrentSale);
        }else {
            const newCurrentSale = [];
            currentSale.forEach((product)=> {
                if (product.id === productID){
                    product = {...product, numberOfUnits: product.numberOfUnits - 1}
                    newCurrentSale = [...newCurrentSale, product]
                }else {
                    newCurrentSale = [...newCurrentSale, product]
                }
            })
            setCurrentSale(newCurrentSale);
        }
        
    }

    return (
        <CurrentSaleContext.Provider value={{currentSale, setCurrentSale, addToCart, removeFromCart }}>
            {children}
        </CurrentSaleContext.Provider>
    )
}