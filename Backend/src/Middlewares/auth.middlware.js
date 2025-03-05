import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";

export const isAuthenticated = async (req, res, next) => {
    try {
        
        if(!req.cookies.jwt) {
            console.log("cookies: ", req.cookies.jwt)
            return res.status(401).json({ message: "Unauthorized (no token)" });
        }

        const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);

        if(!decoded) {
            return res.status(401).json({ message: "Unauthorized (invalid token)" });
        }

        if(decoded.exp < Date.now() / 1000) {
            return res.status(401).json({ message: "Unauthorized (token expired)" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user) {
            console.log("decoded: ", decoded)
            return res.status(401).json({ message: "Unauthorized (user not found)" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in isAuthenticated middleware", error.message);
        res.status(500).json({ message: error.message });
    }
}
