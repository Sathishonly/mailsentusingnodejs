const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/usercontroller");
const auth = require("../middleware/auth");

//register
router.post('/register', usercontroller.register);

// login
router.post('/login', usercontroller.login);

// logout
router.post('/logout', auth, usercontroller.logout);


module.exports = router;