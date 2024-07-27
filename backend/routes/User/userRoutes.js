const express = require('express')
const userRoutes = express.Router();
// import { test } from '../../controllers/User/userController';
const {test, register} = require('../../controllers/User/userController')

userRoutes.get('/', test)
userRoutes.post('/register', register)
module.exports = userRoutes