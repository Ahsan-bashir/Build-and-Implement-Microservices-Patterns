const User = require('../model/user')


        const addUser = async (req, res) => {
            console.log("---- addUser function called ----");
        
            if (!req.body) {
                console.log("---- Request body is empty ----");
                return res.status(400).send({ error: 'Request body is empty' });
            }
        
            if (!req.body.user) {
                console.log("---- User data is missing in request body ----");
                return res.status(400).send({ error: 'User data is missing in request body' });
            }
        
            try {
                const user = new User(req.body.user);
                await user.save();
                console.log("---- User created successfully ----");
                res.status(201).send({ message: 'User created successfully' });
            } catch (err) {
                console.error("---- Error occurred while creating user ----", err);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        }



module.exports = addUser;