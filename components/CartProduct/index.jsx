import React, { useContext } from "react";

import { FaTrash } from 'react-icons/fa';
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CurrentSaleContext } from "../../contexts/CurrentSaleContext";
import { Card, Image, UnitsContainer, ValuesContainer } from "./styles";

export default function CartProduct ({ img, name, numberOfUnits, price, id }){
    const { addToCart, removeFromCart } = useContext(CurrentSaleContext);

    const { transformCurrency } = useContext(CurrencyContext);

    const minusButton = () => {
        if (numberOfUnits > 1){
            removeFromCart(id)
        }else {
            console.log('deseja remover o item da sua lista?')
        }
    }
    return (
        <Card>
            <Image>
                <img src={img} alt="cart product image"/>
            </Image>
            <section>
                <h2>{name.length < 12 ? name : name.slice(0, 9)}</h2>
                <UnitsContainer>
                    <span onClick={minusButton}>-</span>
                    <p>{numberOfUnits}</p>
                    <span onClick={()=> addToCart(id)}>+</span>
                </UnitsContainer>
            </section>
            <ValuesContainer>
                <p>unidade: <span>{transformCurrency(price)}</span></p>
                <p>total: <span>{transformCurrency(price * numberOfUnits)}</span></p>
            </ValuesContainer>
            <FaTrash 
                size={30}
                color="#BDBDBD"
                style={{cursor: "pointer"}}
                onClick={() => removeFromCart(id, true)}
            />
        </Card>
    )
}