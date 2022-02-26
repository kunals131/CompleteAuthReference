const userDataController = require('../controllers/userDataController')
const express = require('express');
const verifyJWT = require('../middlewares/verifyjwt');
const router = express.Router();


router.get('/',verifyJWT, userDataController);

module.exports = router;
