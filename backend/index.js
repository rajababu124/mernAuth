const express = require('express')
const dotenv = require('dotenv')
const userRoutes = require('./routes/User/userRoutes')
const connectDB = require('./utils/connectDB')
dotenv.config()
const app = express()
// Middleware to parse JSON bodies

// call db
connectDB()
app.use(express.json());
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})


// Middle ware for error handling  
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});

app.use('/api/user', userRoutes)