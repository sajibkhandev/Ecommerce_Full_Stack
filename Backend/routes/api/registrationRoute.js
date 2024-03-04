const express =require('express')
const registrationController = require('../../controllers/registrationController')
const registrationMiddlerwar = require('../../middlerwars/registrationMiddlerwar')
const otpController = require('../../controllers/otpController')
const _=express.Router()

_.post("/registration",registrationMiddlerwar, registrationController)
_.post("/otpRoute", otpController)

module.exports=_