import { createContext, useState } from "react";

export const ShowCartContext = createContext({});

export const ShowCartProvider = ({ children }) => {
    const [ showCart, setShowCart ] = useState(false);

    const buttonCartOpenClose = () => { 
        setShowCart(!showCart);
    }

    return (
        <ShowCartContext.Provider value={{ showCart, buttonCartOpenClose }}>
            {children}
        </ShowCartContext.Provider>
    )
}