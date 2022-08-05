import { createContext } from "react";

export const CurrencyContext = createContext({});

export const CurrencyProvider = ({ children }) => {
    const transformCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

    return (
        <CurrencyContext.Provider value={{ transformCurrency }}>
            {children}
        </CurrencyContext.Provider>
    )
}