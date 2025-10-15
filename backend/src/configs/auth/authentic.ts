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
      return res.status(400).json({ message: "Username saknas" });
    }

    // Här kan du även kontrollera lösenordet om du vill
    // t.ex. bcrypt.compare(password, user.password)

    next(); 
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }

next()
}

export default authentic