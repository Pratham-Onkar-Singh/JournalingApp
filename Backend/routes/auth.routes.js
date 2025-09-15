import express from "express";
import { SignIn, SignUp } from "../controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.post("/signup", SignUp);
authRouter.post("/signin", SignIn);

export default authRouter