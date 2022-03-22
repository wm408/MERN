import React, { useState } from "react";
import axios from 'axios';
import ProductManager from "../components/ProductManager";
import ProductList from "../components/ProductList";
// import ProductDetail from "../components/ProductDetail";

const Main = (props) => {
    const [productList, setProductList] = useState([]); //lifted state to be sent down to ProductManager and ProductList
    const [errors, setErrors] = useState({});

    const deleteInDom = (productId) => {
        setProductList(productList.filter(product => product._id !== productId));}

    const createProduct = (productParam) => {
        axios.post('http://localhost:8000/api/products', productParam)
            .then(res => {
                console.log(res);
                console.log(res.data)
                setProductList([...productList, res.data])
                // setTitle("");
                // setPrice("");
                // setDescription("");
            })
            .catch((err)=>{
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div>
            <ProductManager 
                // products={products}
                // setProductList={setProductList}
                onSubmitProp={createProduct}
                initialTitle=''
                initialPrice={0}
                initialDescription=''
                errors={errors}
                setErrors={setErrors}
            />
            <hr />
            <ProductList 
                productList={productList}
                setProductList={setProductList}
                deleteInDom={deleteInDom}
            />
        </div>
    );
};

export default Main;