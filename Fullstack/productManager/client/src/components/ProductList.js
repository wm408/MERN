import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const {productList, setProductList, deleteInDom} = props; //lifted state comes in as props from Main.

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProductList(res.data);
	})
    .catch((err)=>{
        console.log(err);
    })
    }, []) // empty dependency array warning means that useEffect will not do anything if state changes, only on refresh/render.

    return(
        <div>
            <h1>All Products:</h1>
            {
            productList.map((product, index)=>{
                return (
                <div key={index}>
                    <p></p>
                    <Link to={`/api/products/${product._id}`}>{product.title}</Link>
                    ||
                    <Link to={`/api/products/edit/${product._id}`}>Edit</Link>
                    ||
                    <DeleteButton productId={product._id} successCallback={()=>deleteInDom(product._id)}/>
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