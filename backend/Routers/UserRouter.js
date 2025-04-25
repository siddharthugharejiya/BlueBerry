import express from "express"
import { Signup } from "../Controller/UserController.js"


export const UserRouter = express.Router()
UserRouter.post("/signup",Signup)

