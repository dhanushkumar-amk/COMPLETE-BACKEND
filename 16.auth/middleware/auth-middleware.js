const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization']
    console.log(authHeader);
    const token = authHeader && authHeader.split(" ")[1];
    /** Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJlOTE1NjIzYjM2ZDM4ZTRkYTc0ZTEiLCJ1c2VyTmFtZSI6ImRoYW51c2hrdW1hciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzQ3ODk5NTI2LCJleHAiOjE3NDc5MDA0MjZ9.M0JJfr604b8VNN7PT6yESoR5qoC3VPS0iJKoSxbMvuY */ // bearer is [0] and " " split removethen beehgfhffehg is
    if(!token){
        return res.status(401).json({
            success : false,
            message : "access denied pls login"
        })
    }

    // decode the token
    try {
        const decodeTokenInfo  = jwt.verify(token, process.env.JWT_SECRETE_KEY)
        // console.log(decodeTokenInfo);

        req.userInfo = decodeTokenInfo
          next()

    } catch (error) {
         return res.status(500).json({
            success : false,
            message : "access denied pls login"
        })
    }


}


module.exports = authMiddleware
