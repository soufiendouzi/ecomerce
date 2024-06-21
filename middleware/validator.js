const { validationResult } = require("express-validator")

const {check , validationResult } = require ("express-validator")

exports.registerValidation = () => {
    check ("name" , "enter name " ).not().isEmpty() , 
    check ("email " , "enter email ").isEmail() , 
    check ("password" , "enter password").isLength ({min : 6})
}
exports.loginValidation = () => {
    check ("email " , "enter email ").isEmail() , 
    check ("password" , "enter password").isLength ({min : 6})

}

exports.validation = (req , res , next ) => {
    const errors = validationResult(req )
    if(!errors.isEmpty()) {
        return res.status(400).json({  errors : errors.array() })
    }
    next() ;    
}