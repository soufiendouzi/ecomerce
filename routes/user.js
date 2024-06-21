const express = require ('express');
const { login , register } = require('../controllers/user');
const { registerValidation, validation, loginValidation } = require('../middleware/validator');
const isAuth = require('../middleware/isAuth');

// route 

const router = express.Router();

// routes 
router.get('/test', (req , res)=> { 
res.send ("good job soo") 
})
//bregister 

router.post("/register" , register , registerValidation , validation )
// login 
router.post("login" , login , loginValidation , validation )
// currunt 
router.get("/current", isAuth ,(req,res )=> {
    res.send('you are authorized ')
} )
// export 
module.exports= router ;