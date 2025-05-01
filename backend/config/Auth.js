import jwt from "jsonwebtoken";

export const adminValidation = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Authorization token missing" });
    }

    try {
        const extractToken = token.split(" ")[1];
        const decode = jwt.verify(extractToken, "SID"); // "SID" आपकी secret key है

        req.user = {
            userId: decode.userId,
            userRole: decode.userRole
        };

        console.log(req.user, "this is middleware"); // ✅ सही log

        next(); // बहुत जरूरी: middleware से आगे जाने के लिए

    } catch (error) {
        return res.status(401).json({ message: "Invalid token", error: error.message });
    }
};
