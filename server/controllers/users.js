const User      = require('../models/users')
const bcrypt    = require('bcrypt')
const jwt       = require('jsonwebtoken')
const saltRound = 10


module.exports = {
    signUp : (req,res) => {
        let userPassword = bcrypt.hashSync(req.body.password, saltRound)
        User.create({
            username : req.body.username,
            email    : req.body.email,
            password : userPassword,
            role     : 'user' 
        },(err,user) => {
            if (err) {
                res.status(500).json({
                    message : `Fail to create new account ! ${err.message}`,
                    data    : {}
                })
            } else {
                res.status(200).json({
                    message : `Sign Up success !`,
                    data    : user
                })
            }
        })
    },
    signIn : (req,res) => {
        console.log(req.body)
        User.findOne({
            $or : [
                {username : req.body.username_email},
                {email    : req.body.username_email}
            ]
        })
        .exec()
        .then((userData) => {
            if(userData) {
                let passwordCheck = bcrypt.compareSync(req.body.password, userData.password)
                if (passwordCheck) {
                    let token = jwt.sign({userid : userData._id},process.env.secret)
                    res.status(200).json({
                        message : `Sign in success !`,
                        data    : {
                            id : userData._id,
                            name     : userData.name,
                            username : userData.username,
                            email : userData.email,
                            token : token
                        }
                    })
                } else {
                    res.status(400).json({
                        message : `Sign in failed, username/email or password wrong`,
                        data    : {}
                    })
                }
            } else {
                res.status(400).json({
                    message : `Sign in failed, username/email or password wrong`,
                    data    : {}
                })
            }

        })
        .catch((err) => {
            res.status(500).json({
                message : `Error occured on getting users data ${err}`
            })
        })
    }
}