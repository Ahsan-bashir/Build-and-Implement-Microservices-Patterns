const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: { type: String, unique: true },
    username: { type: String },
    password: { type: String },
    productList: { type: Array }
});

module.exports = mongoose.model('user', userSchema);