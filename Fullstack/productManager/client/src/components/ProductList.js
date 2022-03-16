import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const {products, setProducts, deleteInDom} = props; //lifted state comes in as props from Main.
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                deleteInDom(productId)
            })
            .catch(err => console.log(err))
    }
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data);
	})
    .catch((err)=>{
        console.log(err);
    })
    }, []) // empty dependency array warning means that useEffect will not do anything if state changes, only on refresh/render.

    return(
        <div>
            <h1>All Products:</h1>
            {
            products.map((product, index)=>{
                return (
                <div key={index}>
                    <p></p>
                    <Link to={`/api/products/${product._id}`}>{product.title}</Link>
                    ||
                    <Link to={`/api/products/edit/${product._id}`}>Edit</Link>
                    ||
                    <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                </div>
                )})
            }
            <br />
            <br />
            <br />
        </div>
    )
}
export default ProductList;