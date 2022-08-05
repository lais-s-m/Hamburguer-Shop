import React, { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CurrentSaleContext } from "../../contexts/CurrentSaleContext";

import Button from "../Button/styles";
import Card from "./styles";

export default function Product ({ img, name, category, price, id }){
    const { transformCurrency } = useContext(CurrencyContext);

    const { addToCart } = useContext(CurrentSaleContext);

    return (
        <Card>
            <div>
                <img src={img} alt="imagem dos produtos"/>
            </div>
            <h2>{name}</h2>
            <span>{category}</span>
            <p>{transformCurrency(price)}</p>
            <Button
                size="medium"
                onClick={() => addToCart(id)}
            > Adicionar                
            </Button>
        </Card>
    )
}