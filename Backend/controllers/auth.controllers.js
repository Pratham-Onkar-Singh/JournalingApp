import genToken from "../config/token.js";
import { User } from "../models/db.js";


export const SignUp = async (req, res) => {
    const { username, name, email, password } = req.body;

    if(!username || !name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required!"
        })
    }

    const existingUsername = await User.findOne({ username })

    if (existingUsername) {
        return res.status(400).json({
            message: "Username already exists!"
        })
    }

    const existingEmail = await User.findOne({ email })

    if (existingEmail) {
        return res.status(400).json({
            message: "Email already exists!"
        })
    }

    try {
        await User.create({ username, name, email, password })
        res.status(200).json({
            message: "User Signed up"
        })
    } catch (error) {
        res.status(400).json({
            message: "Was not able to Signup"
        })
    }

}

export const SignIn = async (req, res) => {
    const { username, password } = req.body

    if(!username || !password) {
        return res.status(400).json({
            message: "Username and password are required!"
        })
    }
    try {
        const user = await User.findOne({ username, password })
        if(!user) {
            return res.status(401).json({
                message: "Invalid username/password!"
            })
        }
        const token = genToken(user.userId)

        res.status(200).json({
            token
        })
    } catch (error) {
        console.log("Error Signing in:", error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

