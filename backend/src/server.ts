import express from "express"
const app=express()
import dotenv from "dotenv"
dotenv.config()
const port=process.env.PORT
import connectDB from "./configs/connectDb.js"

import registerRouter from "./Routes/registerRoute.js"
connectDB()

app.use("/register",registerRouter)

app.listen(port,()=>{
	console.log(`server run on port ${port}`)
})