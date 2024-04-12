const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reservationSchema = new Schema({    
    user_id:{
        type:String,
        required:true
    },
    facility:{
        type:String,
        required:true
    },
    date_time:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        required:true
    },

}, { timestamps: true })

module.exports = mongoose.model('Reservation', reservationSchema )