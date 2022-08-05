import React, { useContext } from "react";

import Image from "next/image";

import { FaShoppingCart } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

import Logo from '../../images/logo.svg';
import InputSearch from "../InputSearch";
import { StyledHeader } from "./styles";

import { ShowCartContext } from "../../contexts/ShowCartContext";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function DesktopHeader(){
    const { buttonCartOpenClose } = useContext(ShowCartContext);
    const { setProducts, APIProductsList } = useContext(ProductsContext);

    return (
        <StyledHeader viewport="desktop">
            <Image 
                src={Logo}
                alt="website logo"
                onClick={()=> setProducts(APIProductsList)}
                style={{cursor: "pointer"}}    
            />
            <section>
                <InputSearch />
                <div>
                    <FaShoppingCart 
                        size={23}
                        color="#BDBDBD"
                        style={{cursor: "pointer"}}
                        onClick={buttonCartOpenClose}
                    />
                    <MdLogout
                        size={23}
                        color="#BDBDBD"
                        style={{cursor: "pointer"}}
                    />
                </div>
            </section>
        </StyledHeader>
    )
}