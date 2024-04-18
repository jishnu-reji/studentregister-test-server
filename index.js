require('dotenv').config();
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

const taskServer = express()

taskServer.use(cors())
taskServer.use(express.json())
taskServer.use(router)


const PORT = 3000 || process.env.PORT

taskServer.listen(PORT,()=>{
    console.log(`Task Server started at PORT : ${PORT}`);
})

taskServer.get("/",(req,res)=>{
    res.status(200).send(`Task server started and waiting for client request!!!`)
})
