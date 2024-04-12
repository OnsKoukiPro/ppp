const express = require('express')
const router = express.Router()
const {
    createReservation,
    getReservation,
    getReservations,
    deleteReservation,
    updateReservation
} = require('../controllers/reservationController')

//get all reservations
router.get('/', getReservations)

//get a single reservation
router.get('/:id', getReservation)

//post a new reservation
router.post('/' , createReservation)

//delete a  reservation
router.delete('/:id' , deleteReservation)

//update a  reservation
router.patch('/:id' , updateReservation)

module.exports = router