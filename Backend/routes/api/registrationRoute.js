const express =require('express')
const registrationController = require('../../controllers/registrationController')
const registrationMiddlerwar = require('../../middlerwars/registrationMiddlerwar')
const _=express.Router()

_.post("/registration",registrationMiddlerwar, registrationController)

module.exports=_