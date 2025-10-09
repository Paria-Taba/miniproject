import mongoose, { Schema } from "mongoose";

export interface IUser{
 userName:string,
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("users", userSchema);

export default User;