const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerController = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password || password?.length<5) return res.status(406).json({
        messsage: 'Invalid Username or Password'
    });
    const ifUserExists = await User.findOne({username}).exec();
    console.log(ifUserExists);
    if (ifUserExists) return res.status(406).json({
        message : 'Username already exists!'
    })
    try {
        const hashedPassword = await bcrypt.hash(password,10);
        const result = await User.create({
           username,password : hashedPassword        
        })

        res.status(201).json({
            message : 'New user has been created!',
            userInfo : {
                username : result.username,
                role : result.roles,
                id : result._id
            },
        });
    }catch(err){
        console.log(err);
    }
}

    
module.exports = {registerController};
