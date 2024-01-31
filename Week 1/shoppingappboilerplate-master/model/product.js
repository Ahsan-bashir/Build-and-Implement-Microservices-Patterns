const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: { type: String, unique: true },
    productName: { type: String },
    productDisc: { type: String },
    inStock: { type: Boolean }

});

module.exports = mongoose.model('product', productSchema);