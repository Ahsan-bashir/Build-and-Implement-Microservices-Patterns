const express = require('express');
const { getProducts, addProduct, deleteProduct } = require('../controllers/product')

const router = express.Router();

// Write the code to specify the route of getProduct, addProduct and deleteProduct method
router.get('/api/v1/product/:id', getProducts)
router.post('/api/v1/product/', addProduct)
router.delete('/:id', deleteProduct)

module.exports = router