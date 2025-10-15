import { Router } from "express"; 
import type { Request,Response } from "express";
import express from "express"
import dotenv from "dotenv"
import authentic from "../configs/auth/authentic.js";
dotenv.config()
const route=Router()
route.use(express.json());

route.post("/", authentic ,(req:Request,res:Response)=>{
	res.status(200).json({message:"salam"})
}
)

export default route