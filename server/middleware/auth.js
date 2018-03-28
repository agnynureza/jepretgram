const jwt = require('jsonwebtoken')

module.exports = {
    auth:(req,res,next)=>{
        let token = req.headers.token
        if(token){
            try{
                let decoded = jwt.verify(token, process.env.secret);
                console.log(decoded)
                if(decoded.id === Number(req.params.id) ){
                    next()
                }else{
                    res.status(404).json({
                        message : 'not authorize'
                    })
                }
            }catch(err){
                res.status(404).json({
                    message : 'not authorize'
                })
            }
        }else{
            res.status(404).json({
                message : 'need token , login first' 
            })
        }
    }
}