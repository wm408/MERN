import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const ProductDetail = (props) => {

    const { id } = useParams();
    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProductDetail(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]); //don't need useEffect run based on the id changing becasue there are none. We put 'id' here to snuff out the dependency array warning.

    return (
        <div>
            <h2>{productDetail.title}</h2>
            <p>Price: ${productDetail.price}</p>
            <p>Description: {productDetail.description}</p>
        </div>
    );
};

export default ProductDetail;