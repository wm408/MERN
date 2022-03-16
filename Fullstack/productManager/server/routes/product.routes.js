const productController = require('../controllers/product.controller');
const Product = require('../models/product.model');

module.exports = (app) =>{ // these exports will be called by the server.js

    app.get('/api/products', productController.findAllProducts);

    app.post('/api/products', productController.createNewProduct); // while the path '/api/products' is the same as the one above, we have a different http request here.

    app.get('/api/products/:id', productController.findOneProduct); // this 'id' value must match the corresponding parameters in the controller file for the particular function; at the end of req.params.id <--- this 'id'. Can be anything on both sides but MUST match.

    app.put('/api/products/:id', productController.updateProduct);

    app.delete('/api/products/:id', productController.deleteOneProduct);
}