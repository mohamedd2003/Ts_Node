import { Request, Response } from "express";
import User from "../../../database/models/user.model";

export const addUser=async(req:Request,res:Response)=>{
let user=await User.insertOne(req.body)
res.json({message:'message',user})    
}