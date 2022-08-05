import React, { useContext } from "react";
import { CurrentSaleContext } from "../../contexts/CurrentSaleContext";
import CartProduct from "../CartProduct";
import { List } from "./styles";

export default function CartProductsList (){
    const { currentSale } = useContext(CurrentSaleContext);

    return (
        <List>
            {currentSale && currentSale.map((product)=> {
                return (
                    <li key={product.id}>
                        <CartProduct
                            img = {product.img}
                            name = {product.name}
                            numberOfUnits = {product.numberOfUnits}
                            price = {product.price}
                            id = {product.id}
                        />
                    </li>)
            })}
        </List>
    )
}