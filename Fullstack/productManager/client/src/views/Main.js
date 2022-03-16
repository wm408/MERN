import React, { useState } from "react";
import ProductManager from "../components/ProductManager";
import ProductList from "../components/ProductList";

const Main = (props) => {
    const [products, setProducts] = useState([]); //lifted state to be sent down to ProductManager and ProductList
    const deleteInDom = (productId) => {
        setProducts(products.filter(product => product._id !== productId));}
    return (
        <div>
            <ProductManager 
            products={products}
            setProducts={setProducts}
            />
            <hr />
            <ProductList 
            products={products}
            setProducts={setProducts}
            deleteInDom={deleteInDom}
            />
        </div>
    );
};

export default Main;