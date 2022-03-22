import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import ProductManager from './ProductManager';
import DeleteButton from './DeleteButton';
// import ProductList from './ProductList';

const Update = (props) => {
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const [products, setProducts] = useState("");
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState('');
    // const [description, setDescription] = useState('');    
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
                //this is meant to be unchanging while we're on this component,
                //so we use another useState hook to capture and display it
                // setHeaderTitle(res.data.title);
                setLoaded(true);
            })
            .catch((err)=>{
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }, []);

    const updateProduct = (updatedProduct) => {
        axios.put(`http://localhost:8000/api/products/${id}`, updatedProduct)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/"); //No need to worry about state here. Navigate will trigger a total rerender of Main/DisplayAll which will update our list via useEffect in Display
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded?
            <ProductManager
                onSubmitProp={updateProduct}
                initialTitle={products.title}
                initialPrice={products.price}
                initialDescription={products.description}
                errors={errors}
            />
            :null}
            <DeleteButton productId={products._id} successCallback={() => navigate("/")} />
        </div>
    )
}
export default Update;