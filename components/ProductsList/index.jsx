import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import Product from "../Product";
import List from "./styles";

export default function ProductsList (){
    const { products, setProducts, APIProductsList } = useContext(ProductsContext);

    return (
        <List>
            { products.length !== 0 ? 
            products.map((product)=> {
                return (
                <li key={product.id}>
                    <Product
                        id={product.id}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        img={product.img}        
                    />
                </li>)
            })
            :
            (
                <>
                    <p>Desculpe, mas não encontramos nenhum produto parecido com o da sua pesquisa 😔 </p>
                    <span onClick={()=> setProducts(APIProductsList)}> retornar à lista de produtos </span>
                </>
            )}
        </List>
    )
}