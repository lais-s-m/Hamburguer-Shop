import React, { useContext } from "react";
import { CurrentSaleContext } from "../../contexts/CurrentSaleContext";

import { ShowCartContext } from "../../contexts/ShowCartContext";
import CartProductsList from "../CartProductsList";
import CartTotal from "../CartTotal";

import { EmptyCart, Modal, ModalHeader } from "./styles";

export default function Cart (){
    const { currentSale } = useContext(CurrentSaleContext);

    const { buttonCartOpenClose } = useContext(ShowCartContext);

    return (
        <Modal onClick={buttonCartOpenClose}>
            <section onClick={(event)=> event.stopPropagation()}>
                <ModalHeader>
                    <h2>Carrinho de compras</h2>
                    <span
                        onClick={buttonCartOpenClose}
                    >X</span>
                </ModalHeader>   
                { currentSale.length === 0 ? 
                (<EmptyCart>
                    <h3>Sua sacola está vazia</h3>
                    <p onClick={buttonCartOpenClose}>Adicione itens</p>
                </EmptyCart>) :
                (<>
                    <CartProductsList />
                    <CartTotal />
                </>)}
            </section>
        </Modal>
    )
}