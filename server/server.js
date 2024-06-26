require ('dotenv').config()
const mongoose = require('mongoose')

const express = require ('express')
const reservationRoutes = require('./routes/reservations')
const userRoutes = require('./routes/user')
// express app 
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/reservations',reservationRoutes)
app.use('/api/user',userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // listen for requests 
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port',process.env.PORT)
        })
    })
    .catch((error) =>{
        console.log(error)
    })

