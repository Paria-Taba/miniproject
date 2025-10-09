import { Router } from "express"; 
import type { Request,Response } from "express";
const route=Router()

route.post("/",(req:Request,res:Response)=>{
	console.log("hello register page")
})

export default route