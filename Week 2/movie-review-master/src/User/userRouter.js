

//import the require Module

//Post method will post user in database
router.post('/', async (req, res) => {
    

         //retreive user from the req body
       

        //calling saveUser on controller layer
        //return result or err
        userController.saveUser(newUser, (err, result) => {
           
})
})

////Get method will get specific  user from database
router.get('/:id', async (req, res) => {
   
       //retreive userId from the req.params
       

        //calling getUserById on controller layer
        //return result or err
        userController.getUserById(user, userId, (err, result) => {
           

  
})
})

module.exports = router