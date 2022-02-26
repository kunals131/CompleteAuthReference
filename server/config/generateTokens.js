const jwt = require('jsonwebtoken')

const createAccessToken = (data,expTime)=>{
    const accessToken = jwt.sign(data,process.env.ACCESS_TOKEN_SECRET, {expiresIn : expTime});
    return accessToken;
}

const createRefreshToken = (data,expTime)=>{
    const token = jwt.sign(data,process.env.REFRESH_TOKEN_SECRET, {expiresIn : expTime});
    return token;
}

module.exports = {createAccessToken, createRefreshToken}