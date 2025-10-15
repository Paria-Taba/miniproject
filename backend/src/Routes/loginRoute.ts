import { Router } from "express"; 
import type { Request,Response } from "express";
import express from "express"
import dotenv from "dotenv"
import authentic from "../configs/auth/authentic.js";
import jwt from "jsonwebtoken"
dotenv.config()
const route=Router()
route.use(express.json());

const keyLocal="jwt"
route.post("/", authentic, (req: Request, res: Response) => {
	const{userName,password}=req.body
	 const user = (req as any).user;
	if(!userName || !password){
		res.status(400).json({message:"please write user name and password"})
		return
	}
if(!user.userName==userName || !user.password==password){
	res.status(400).json({message:"wrong username and password"})
		return

}
  const token = jwt.sign(
    { userName},
    process.env.JWT_SECRET || "hemlig",
    { expiresIn: "1h" }
  );

  res.status(200).json({
    message: "salam",
    token: token
  });
});

export default route