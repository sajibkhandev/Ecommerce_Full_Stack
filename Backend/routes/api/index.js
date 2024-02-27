const express =require('express')
const _=express.Router()
const registrationAuth=require('./registrationRoute')

_.use("/auth",registrationAuth)

module.exports=_