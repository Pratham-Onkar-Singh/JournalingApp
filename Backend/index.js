import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/auth.routes.js";
import entryRouter from "./routes/entries.routes.js";
import { connect_mongodb } from "./config/db.js";
dotenv.config();

connect_mongodb()

const app = express()
app.use(express.json())

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/entry", entryRouter)


app.listen(3000)