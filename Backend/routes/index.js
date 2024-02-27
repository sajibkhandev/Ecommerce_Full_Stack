const express =require('express')
const _=express.Router()
const apiRoute=require('./api')

const apiBaseUrl=process.env.API_BASE_URL

_.use(apiBaseUrl,apiRoute)
_.use("/api/v1",(req,res)=>(res.send("Api Route is Wrong")))

module.exports=_