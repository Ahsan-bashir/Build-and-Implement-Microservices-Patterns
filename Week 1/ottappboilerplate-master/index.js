require('./config/database').connect();
const express = require('express');
const app = express();
const port = 4001;
const movieRouter = require('./routes/movie')
const userRouter = require('./routes/user')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1/movie', movieRouter);
app.use('/api/v1/user', userRouter);

app.get('/', (req, res) => {
    res.send("User movie Service is running");
});

app.listen(port, () => {
    console.log(`User Product Service Started on Port ${port}`);
});

module.exports = app;
//require('../eurekadiscovery/eureka-helper/eureka-helper').registerWithEureka('user-movie-service', port);