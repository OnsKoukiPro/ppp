const { response } = require('express')
const Reservation = require('../models/reservationModel')
const mongoose = require('mongoose')

// get all reservations 
const getReservations = async (req,res) => {
    const reservations = await Reservation.find({}).sort({createdAt: -1})
    res.status(200).json(reservations)
}

//get a single reservation
const getReservation = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such reservation'})
    }
    const reservation = await Reservation.findById(id)
    if(!reservation){
        res.status(404).json({error: 'No such reservation'})
    }
    res.status(200).json(reservation)

}

//create a new reservation
const createReservation = async(req,res) =>{
    const {user_id,facility,date_time,status} = req.body

    try{
        const reservation = await Reservation.create({user_id, facility, date_time, status}) 
        res.status(200).json(reservation)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a reservation
const deleteReservation = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such reservation'})
    }

    const reservation = await Reservation.findOneAndDelete({_id: id})
    if(!reservation){
        res.status(404).json({error: 'No such reservation'})
    }
    res.status(200).json(reservation)
}

//update a reservation
const updateReservation = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such reservation'})
    }
    const reservation = await Reservation.findOneAndUpdate({_id: id}, {...req.body})
    if(!reservation){
        res.status(404).json({error: 'No such reservation'})
    }
    res.status(200).json(reservation)
}


module.exports={
    createReservation,
    getReservation,
    getReservations,
    deleteReservation,
    updateReservation
}