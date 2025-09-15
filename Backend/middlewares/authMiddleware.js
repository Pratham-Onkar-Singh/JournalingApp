import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET
export const authMiddleware = (req, res, next) => {
    const token = req.headers.token;

    if(token) {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded);
        if(decoded) {
            const { userId } = decoded;
            
            req.userId = userId
            next()
        } else {
            res.status(400).json({
                message: "You are not logged in!"
            })
        }
    } else {
        res.status(400).json({
            message: "Authentication failed"
        })
    }
}
