import { Router } from "express"; 
import type { Request,Response } from "express";
import userModel from "../configs/models/userModel.js"
import express from "express"
const route=Router()
route.use(express.json());


route.post("/", async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = await userModel.create({ userName, password });

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
});


export default route