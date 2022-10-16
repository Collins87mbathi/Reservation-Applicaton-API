const mongoose = require("mongoose");


const TableSchema = new mongoose.Schema({
    name :{
        type:String,
        
    },
    capacity : {
        type:Number,
       
    }
})

module.exports = mongoose.model('Table', TableSchema);