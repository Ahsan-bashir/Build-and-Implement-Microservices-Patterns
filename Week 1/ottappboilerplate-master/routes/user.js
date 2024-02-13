const express = require('express');
const router = express.Router();
const addUser = require('../controllers/user')

    /**
        Write the code to specify the route of add the user details
    */

router.post('/', addUser);

module.exports = router;