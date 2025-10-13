import express from "express"
const app=express()
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
const port=process.env.PORT
import connectDB from "./configs/connectDb.js"

import registerRouter from "./Routes/registerRoute.js"
connectDB()

app.use("/",(req,res,next)=>{
console.log(`method: ${req.method}, url: ${req.url}`)
next()
})

app.use(cors());

app.use("/register",registerRouter)

app.listen(port,()=>{
	console.log(`server run on port ${port}`)
})