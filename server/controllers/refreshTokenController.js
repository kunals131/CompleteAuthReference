const User = require('../models/User');
const jwt = require('jwt');
const { createAccessToken } = require('../config/generateTokens');

const refreshTokenController = async(req,res)=>{
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(403);
    try {
    const refreshToken = cookies.jwt;
    const foundUser = User.findOne({refreshToken}).exec();
    if (!foundUser) res.send(403);
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err,dec)=>{
            if (err || foundUser.username!==decoded.username) return res.sendStatus(403);
            const roles = Object.values(foundUser.roles);
            const accessToken = createAccessToken({userInfo : foundUser.userInfo});
            res.json({accessToken});
        }

    );
    }
    catch(err) {
        console.log(err);
        res.status(500).json("SERVER ERROR");
    }

}

module.exports = refreshTokenController;