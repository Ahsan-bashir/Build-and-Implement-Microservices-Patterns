    
    
    const express = require('express');
    const app = express()
    const movieReviewRouter = require('./movieReviewRouter')

    app.use(express.json())
    app.use('/movieReview',movieReviewRouter)
    app.listen(6000,()=>{
        console.log('listening');
    })



    