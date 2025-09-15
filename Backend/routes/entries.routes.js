import express from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { createEntry, deleteEntry, getEntries, updateEntry } from "../controllers/entries.controllers.js"

const entryRouter = express.Router()

entryRouter.post("/", authMiddleware, createEntry);
entryRouter.get("/", authMiddleware, getEntries);
entryRouter.patch("/:id", authMiddleware, updateEntry);
entryRouter.delete("/:id", authMiddleware, deleteEntry);

export default entryRouter