const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        //our validations are defined down here.
        //most take two values: the Criteria and Message
        required: [true, "You must have a product title"],
        maxLength: [30, "The title's length can be no more than 30 characters!"] // specific maxLength to a string. Alternatively: minLength for a string. max/min are for number types.
    },
    price: {
        type: Number,
        required: [true, "you forgot the price!"],
        min: [10, "need to be => 10"],
        max: [200, "need to be <= 200"]
    },
    description: {
        type: String,
        //our validations are defined down here.
        //most take two values: the Criteria and Message
        required: [true, "You are missing the description."],
        maxLength: [400, "The description's length can be no more than 30 characters!"] // specific maxLength to a string. Alternatively: minLength for a string. max/min are for number types.
    }
//_id is created every time we create a new document.

// include timestamps!!!
}, {timestamps:true})


//model includes collection name in singular form, e.g. 'Product' (best practice), and second part is the schema....
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product; // this export will be called in the controller.


