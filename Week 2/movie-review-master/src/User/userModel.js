const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    userId:{
        type:String,
        require: true 
    },
   userName :{
        type:String,
        require: true   
    },
    userEmail:{
        type:String,
        require: true   
    },
    userAddress:{
        type:String,
        require: true
    }
})

const user = mongoose.model('user',userSchema)

module.exports = user