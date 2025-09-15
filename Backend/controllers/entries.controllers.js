import { Entry } from "../models/db.js";

export const createEntry = async (req, res) => {
    const userId = req.userId
    const { content, createdAt } = req.body;

    if(!content) {
        return res.status(400).json({
            message: "Content is required!"
        })
    }

    try {
        const entry = await Entry.create({
            userId, content, createdAt
        })

        res.status(201).json({
            entry
        })
    } catch (error) {
        console.log("Error creating entry:", error);
        res.status(400).json({
            message: "Error creating entry"
        })
    }
}

export const getEntries = async (req, res) => {
    const userId = req.userId;

    try {
        const entries = await Entry.find({ userId })

        res.status(200).json({
            entries
        })
    } catch (error) {
        console.log("Error getting entries:", error);
        res.status(400).json({
            message: "Error getting entries"
        })
    }
}

export const updateEntry = async (req, res) => {
    const entryId = req.params.id
    // console.log(entryId);
    const userId = req.userId;
    const { content, createdAt } = req.body;

    if(!content) {
        return res.status(400).json({
            message: "Content is required!"
        })
    }

    try {
        const entry = await Entry.findOneAndUpdate(
            { _id: entryId, userId },
            { content, createdAt },
            { new: true }
        );

        if (!entry) {
            return res.status(404).json({
                message: "Entry not found"
            });
        }

        res.status(200).json({
            entry
        })
    } catch (error) {
        console.log("Error updating entry:", error);
        res.status(400).json({
            message: "Error updating entry"
        })
    }
}

export const deleteEntry = async (req, res) => {
    const entryId = req.params.id
    // console.log(entryId);
    const userId = req.userId;
    try {
        const entry = await Entry.deleteOne(
            { _id: entryId, userId }
        );

        if (entry.deletedCount === 0) {
            return res.status(404).json({
                message: "Entry not found"
            });
        }

        res.status(200).json({
            message: "Entry deleted successfully!"
        })
    } catch (error) {
        console.log("Error deleting entry:", error);
        res.status(400).json({
            message: "Error deleting entry"
        })
    }
}