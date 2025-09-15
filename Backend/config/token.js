import jwt from "jsonwebtoken"

const genToken = (id) => {
    try {
        const token = jwt.sign({
            userId: id
        }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        })

        return token
    } catch (error) {
        throw new Error("Error in generating token")
    }
}

export default genToken