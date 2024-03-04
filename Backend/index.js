require('dotenv').config()
const express=require('express')
const cors = require('cors')
const route = require('./routes')
const mongodbConfig =require('./config/mongobdConfig')

const app=express()
app.use(cors())
const port=3000
mongodbConfig()



app.use(express.json())

app.use(route)
app.listen(port,()=>{
    console.log("Port is Runing");
})
