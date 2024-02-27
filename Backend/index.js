require('dotenv').config()
const express=require('express')
var cors = require('cors')
const route = require('./routes')
const app=express()
app.use(cors())
const port=3000

app.use(express.json())

app.use(route)
app.listen(port,()=>{
    console.log("Port is Runing");
})
