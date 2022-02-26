const User =require('../models/User');

const userDataController = async (req,res)=>{
    try {
    const AllUsers = await User.find({})
    res.json(AllUsers);
    }
    catch(err) {
        res.status(404).json(err);
    }
}

module.exports = userDataController;