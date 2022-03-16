import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const ProductDetail = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [productDetail, setProductDetail] = useState({});
    // const deleteInDom = (productId) => {
    //     setProducts(products.filter(product => product._id !== productId));}

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProductDetail(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]); //don't need useEffect run based on the id changing becasue there are none. We put 'id' here to snuff out the dependency array warning.

    const doDeleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                //Because the delete request is on a different component, we do not need to update state here.
                    //Navigating back to our Main.js will trigger a total rerender in DisplayAll, 
                        //which will rerun our useEffect, setting state to the most up to date collection list (delete included)
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div>
            <h2>{productDetail.title}</h2>
            <p>Price: ${productDetail.price}</p>
            <p>Description: {productDetail.description}</p>
            <button onClick={doDeleteProduct}>Delete Me</button>
        </div>
    );
};

export default ProductDetail;