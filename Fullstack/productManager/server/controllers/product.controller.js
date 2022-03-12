// this is how we query and manipulate 'Product' collection in our database, by accessing our *.model.js
const Product = require('../models/product.model');

// we are exporting an object of key/value pairs.
// the key being how we are referring to our calls,
// and the call itself (arrow function), being the value!
// we can easily access these in the product.routes.js

module.exports = { // these exports will be called in the routes.
    // to access all products in our collection.
    findAllProducts: (req, res)=>{
        Product.find()
            .then((allProducts)=>{ //in the parenthesis is the result of the promise. In this case, all documents inside of the collection, since we are finding everything. Like (e) in a synthetic event, this is similar. We call it 'allProducts' in this case.
                console.log(allProducts);
                res.json(allProducts); // the client will have back all of the output from the database... we are making the return (or 'res'/response in this case).
            }) // here we provide the result of the promise in the (()), if it looks good and is fulfilled. Can be named whatever we want.
            .catch((err)=>{
                console.log("findAllProducts has failed!");
                res.json({message: "Something went wrong in findAll", error: err})
            })
    },

    createNewProduct: (req, res)=>{
        Product.create(req.body) //we need to pass some information into create here, so it will be 'req.body' which is passed through via a form, for example.
            .then((newProduct)=>{
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err)=>{
                console.log("something went wrong in createNewProduct");
                res.status(400).json(err); // to handle validators properly. 400 says it exists, but you're doing something wrong.m vs. a 404 status which means nothing exists there.
            })
    },

}
    // findOneProduct: (req, res)=>{
    //     Product.findOne({_id: req.params.id}) //technically 'id' can be anything. It just needs to match our routes.
    //         .then((oneProduct)=>{
    //             console.log(oneProduct);
    //             res.json(oneProduct);
    //         })
    //         .catch((err)=>{
    //             console.log('Find One Product Failed');
    //             res.json({message: 'Something went wrong in find one product', error: err});
    //         })
    // },

    // deleteOneProduct: (req, res)=>{
    //     Product.deleteOne({_id: req.params.id})
    //         .then((deletedProduct)=>{
    //             console.log(deletedProduct);
    //             res.json(deletedProduct);
    //         })
    //         .catch((err)=>{
    //             console.log('Delete one product failed');
    //             res.json({message: 'Delete one product failed', error: err});
    //         })
    // },

//     updateProduct: (req, res)=>{
//         Product.findOneAndUpdate({_id: req.params.id}, // this is used to look up the particular product, 
//             req.body,  // this line is actually used to do the update. req.body is an argument, we are taking in the provided information here.
//             {new: true, runValidators: true} // this line will always be the same. Note, by default the validators only run on post request. 'runValidators' here ensures that it also happens on update.
//             )
//             .then((updatedProduct)=>{
//                 console.log(updatedProduct)
//                 res.json(updatedProduct)
//             })
//             .catch((err)=>{
//                 console.log("something went wrong in updateProduct");
//                 res.status(400).json(err); // to handle validators properly. 400 says it exists, but you're doing something wrong.m vs. a 404 status which means nothing exists there.
//             })
//     }
// }