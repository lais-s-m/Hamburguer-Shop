import React, { useContext, useState } from "react";
import { ShowCartContext } from "../../contexts/ShowCartContext";

import Image from "next/image";

import Logo from '../../images/logo.svg';

import { AiOutlineSearch } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

import { StyledHeader } from "./styles";
import InputSearch from "../InputSearch";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function MobileHeader(){
    const [ showInputSearch, setShowInputSearch ] = useState(false);
    
    const { buttonCartOpenClose } = useContext(ShowCartContext);
    const { setProducts, APIProductsList } = useContext(ProductsContext);

    return (
        <StyledHeader viewport="mobile">
                {showInputSearch ? (
                        <InputSearch
                            setShowInputSearch = {setShowInputSearch}
                            mobile
                        />
                    ) :
                    (   <>
                            <Image
                                src={Logo}
                                alt="website logo"
                                onClick={()=> setProducts(APIProductsList)}
                                style={{cursor: "pointer"}}  
                            />
                            <section>
                                <div>
                                    <AiOutlineSearch
                                        onClick = { () => setShowInputSearch(true)}
                                        size={23}
                                        color="#BDBDBD"
                                        style={{cursor: "pointer"}}
                                    />
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
                        </>
                    )
                }
            
        </StyledHeader>
    )
}