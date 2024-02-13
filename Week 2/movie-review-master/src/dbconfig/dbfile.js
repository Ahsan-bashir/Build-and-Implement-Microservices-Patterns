const express = require('express')
const mongoose = require('mongoose')
//Give the url for mongodb databse
const url = 'mongodb://localhost/userDb'
const app = express()


mongoose.connect(url,{useNewUrlParser:true})

const connection = mongoose.connection

connection.on('open',()=>{
    console.log('Connected...');
})

app.use(express.json())