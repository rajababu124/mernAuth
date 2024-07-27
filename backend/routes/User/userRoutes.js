const express = require('express')
const userRoutes = express.Router();
// import { test } from '../../controllers/User/userController';
const {test} = require('../../controllers/User/userController')

userRoutes.get('/', test)
module.exports = userRoutes