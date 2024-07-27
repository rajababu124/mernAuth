const mongoose = require('mongoose')



const connectDB = async () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log('DB connected successfully !')
    }).catch((err) => {
        console.log('Error occured while DB Connection !', err)
    })
}

module.exports = connectDB
