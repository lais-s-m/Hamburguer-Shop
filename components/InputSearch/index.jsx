import React, { useContext, useEffect, useState } from "react";

import { AiOutlineSearch } from 'react-icons/ai';
import { ProductsContext } from "../../contexts/ProductsContext";
import Button from "../Button/styles";
import { StyledInput } from "./styles";


export default function InputSearch ( { mobile, setShowInputSearch }){
    const { APIProductsList, setProducts } = useContext(ProductsContext);
    const [ input, setInput ] = useState("");

    useEffect(()=> {
        if(input === ""){
            setProducts(APIProductsList);
        } 
    },[input])

    const filterProducts = () => {
        if (mobile){
            setShowInputSearch(false);
        }

        const value = input.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
        const filteredList = APIProductsList.filter((product)=> 
            product.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(value) ||
            product.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(value)
        )
        setProducts(filteredList);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            filterProducts();
        }
    }

    return (
        <StyledInput>
            <input
                placeholder="Digitar pesquisa"
                onChange={(event)=> setInput(event.target.value)}
                onKeyPress={handleKeyPress}
            />
            <Button
                size="medium"
                color="green"
                onClick = {filterProducts}
            >
                <AiOutlineSearch size={23} />
            </Button>
        </StyledInput>
    )
}

