    
    const express = require('express')
    const app = express()
    const userRouter = require('./userRouter')
    app.use(express.json())

    app.use('/user',userRouter)

   

    const server = app.listen(4000, () => {
        console.log('Listening on port', 4000);
      });

      module.exports = server;


