import { Router } from "express"; 
import type { Request,Response } from "express";
import userModel from "../configs/models/userModel.js"
import express from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const route=Router()
route.use(express.json());


route.post("/", async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = await userModel.create({ userName, password });

const token = jwt.sign(
  { userName: newUser.userName, id: newUser._id },
  process.env.JWT_SECRET!,
  { expiresIn: "1h" }
);
   res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        userName: newUser.userName,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
});
route.get("/", async (req: Request, res: Response) => {
  try {
       const users = await userModel.find({}, { userName: 1, password: 1, _id: 0 });
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error", error });
  }
});



export default route