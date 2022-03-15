import React, {useState} from 'react';
import axios from 'axios';

const ProductManager = (props) => {
    const {products, setProducts} = props; //lifted state comes in as props from Main.
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', {
            title,    // this is shortcut syntax for title: title,
            price,      // this is shortcut syntax for price: price,
            description // this is shortcut syntax for description: description
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                setProducts([...products, res.data]); //we will update the lifted state of our people array to include the current value in state plus the single new object created and returned from our post request.
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p className="paragraph">
                <label className="margin-right">Title</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p className="paragraph">
                <label className="margin-right">Price</label><br/>
                <input type="number" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p className="paragraph">
                <label className="margin-right">Description</label><br/>
                <textarea type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductManager;