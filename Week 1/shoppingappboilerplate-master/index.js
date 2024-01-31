require('./config/database').connect();
const express = require('express');
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const app = express();
const port = 4001;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1/product', productRouter);
app.use('/api/v1/user', userRouter);

app.get('/', (req, res) => {
    res.send("User product Service is running");
});

app.listen(port, () => {
    console.log(`User Product Service Started on Port ${port}`);
});

// require('../eurekadiscovery/eureka-helper/eureka-helper').registerWithEureka('user-product-service', port);

module.exports = app;