import React, { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CurrentSaleContext } from "../../contexts/CurrentSaleContext";
import Button from "../Button/styles";
import StyledCartTotal, { Bar } from "./styles";

export default function CartTotal (){
    const { currentSale, setCurrentSale } = useContext(CurrentSaleContext);
    const { transformCurrency } = useContext(CurrencyContext);

    const [ cartValue, setCartValue ] = useState(0);

    useEffect(()=> {
        const total = currentSale.reduce((accumulator, product) => accumulator + (product.price * product.numberOfUnits), 0);
        setCartValue(total);
    },[currentSale]);

    const removeAllProducts = () => {
        setCurrentSale([]);
    }

    return (
        <StyledCartTotal>
            <Bar />
            <section>
                <h2>Total</h2>
                <p>{transformCurrency(cartValue)}</p>
            </section>
            <Button onClick={removeAllProducts}>Remover todos</Button>
        </StyledCartTotal>
    )
}