const User = require('../models/User');
const bcrypt = require('bcrypt');
const { createAccessToken, createRefreshToken } = require('../config/generateTokens');

const loginController = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(406).json({ message: 'Invalid Username or Password!' });
    try {
        const foundUser = await User.findOne({ username }).exec();
        if (!foundUser) {
            return res.sendStatus(401); //Unauthorized!
        }
        console.log(foundUser);
        const match = await bcrypt.compare(password, foundUser.password);
        if (match) {
            const accessToken = createAccessToken({
                userInfo: { username}
            });
            const refreshToken = createRefreshToken({
                username: foundUser.username
            });
            foundUser.refreshToken = refreshToken;
            const result = await foundUser.save();
            console.log(result);
            req.sess

            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None',secure : true, maxAge: 24 * 60 * 60 * 1000 });
            res.json({ accessToken });
        }
        else {
            res.sendStatus(401);
        }

    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    loginController
}