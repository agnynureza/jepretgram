var express = require('express');
var router = express.Router();
const {signIn,signUp} = require('../controllers/users')

router.post('/signin',signIn)
router.post('/signup',signUp)

module.exports = router;
