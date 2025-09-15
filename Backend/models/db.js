import mongoose from "mongoose"
const ObjectId = mongoose.Schema.Types.ObjectId

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        unique: true,
        type: String,
        required: true
    }
})

const User = mongoose.model("User", UserSchema)

const EntrySchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: User
    },
    content: {
        type: String
    },
    createdAt: {
        type: Date
    }
})

const Entry = mongoose.model("Entry", EntrySchema)

export { User, Entry }

