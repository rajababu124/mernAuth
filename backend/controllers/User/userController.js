const bcrypt = require('bcryptjs');
const User = require('../../models/User/User');

const test = (req, res) => {
    res.json({
        message: "Test api is working perfectly !!",
    })
}



const register = async (req, res, next) => {
    const { username, email, password } = req.body;
    // Check if all required fields are provided
    if (!username || !email || !password) {
        res.status(400).json({
            status: 'error',
            message: 'Username, email, and password are required!',
            details: req.body
        });
        return;
    }

    // Check if username or email already exists

    const userFound = await User.findOne({ $or: [{ username }, { email }] });
    if (userFound) {
        res.status(400).json({
            status: 'error',
            message: 'Username or email already exists!'
        });
        return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

   try {
     // Register the User
     const userRegistered = await User.create({ username, email, password: hashedPassword });
     // Send the response
     res.status(201).json({
         status: 'success',
         message: 'User Registered Successfully!',
         user: {
             id: userRegistered._id,
             username: userRegistered.username,
             email: userRegistered.email
         }
     });
   } catch (error) {
    next(error)
   }
}

module.exports = {test, register}