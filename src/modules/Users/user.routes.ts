import { Router } from "express";
import { addUser } from "./user.controller";

const userRouter=Router()
userRouter.post("/signup",addUser)
export default userRouter