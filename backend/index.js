const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./utils/connectDB')
dotenv.config()
const app = express()

// call db
connectDB()
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})