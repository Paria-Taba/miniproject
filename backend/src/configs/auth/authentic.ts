import userModel from "../../configs/models/userModel.js"
import type { Request,Response,NextFunction } from "express"


async function authentic (req:Request,res:Response,next:NextFunction){
	const{userName,password}=req.body
	  if (!userName || !password) {
    return res.status(400).json({ message: "userName and password are required" });
  }
	
	 try {
    const user = await userModel.findOne({ userName });

    if (!user) {
      return res.status(400).json({ message: "This username and password not register yet,please check it!" });
    }
	

    (req as any).user = user;

    next(); // ✅ bara ett anrop här 
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }


}

export default authentic