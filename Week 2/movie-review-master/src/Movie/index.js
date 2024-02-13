    
    const express = require('express')
    const app = express()
    const movieRouter = require('./movieRouter')
    app.use(express.json())

    app.use('/movie',movieRouter)

  

    const server = app.listen(5000, () => {
        console.log('Listening on port', 5000);
      });

      module.exports = server;


