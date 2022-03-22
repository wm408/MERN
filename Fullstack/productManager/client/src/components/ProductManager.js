import React, {useState} from 'react';

const ProductManager = (props) => {
    const { onSubmitProp, initialTitle, initialPrice, initialDescription, errors, setErrors } = props; //lifted state comes in as props from Main.
    // const [errors, setErrors] = useState({});
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({ title, price, description });
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p className="paragraph">
                <label className="margin-right">Title</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" name="title" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
                {
                        errors.title?
                        <span>{errors.title.message}</span>
                        :null
                }
            </p>
            <p className="paragraph">
                <label className="margin-right">Price</label><br/>
                <input type="number" name="price" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
                {
                    errors.price?
                    <span>{errors.price.message}</span>
                    :null
                }
            </p>
            <p className="paragraph">
                <label className="margin-right">Description</label><br/>
                <textarea type="text" name="description" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
                {
                    errors.description?
                    <span>{errors.description.message}</span>
                    :null
                }
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductManager;