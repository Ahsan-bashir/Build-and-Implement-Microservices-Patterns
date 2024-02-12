const User = require('../model/user')
const Product = require('../model/product')

const getProducts = async (req, res) => {
    
    // Write the code to get the product details
    try {
        const products = await Product.find({productId: req.params.id});
        res.status(200).send(products);
    } catch (error) {
        res.status(404).send(error);
    }

}

const addProduct = async (req, res) => {
    
    // Write the code to add the product details
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(200).send(product);
    } catch (error) {
        res.status(404).send(error);
    }
}

const deleteProduct = async (req, res) => {
    
    // Write the code to delete the product details

}

module.exports = { getProducts, addProduct, deleteProduct };