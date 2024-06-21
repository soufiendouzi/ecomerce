
const User = require ("../Modal/User")
const bcrypt = require ("bcrypt")
const jwt = require ("jsonwebtoken") 

exports.register = async (req , res) => {
   try {
 const {name ,email , password , phone }= req.body ;
 const foundUser = await  User.findOne ({email}) 
 if (foundUser ) {
    return res
      .status(400)
      .send({ errors : [{msg : `try again `}] })
 } 
 const saltRounds = 10 ;
 const hashedPassword = await bcrypt.hash(password , saltRounds)
 // newUser 
 const newUser = new User ({...req.body })
 newUser.password = hashedPassword ;
 await newUser.save();

 // token 
 const token = jwt.sign (
   {
      id : newUser._id 
   } , 
   process.env.SECRETKEY ,
   { expiresIn : "24h" } 
 )
 res.status(200).send ({msg : "register succ " ,user: newUser  , token })
} catch (error) {
    res
      .status(400)
      .send({ errors : [{msg : `try again cant add  `}] })
   }
}

exports.login = async  (req , res) => {
try {

   const  {email , password } = req.body 
   // check if email exist 
   const foundUser  = await User.findOne ({email })
   if (!foundUser) {
    return res.status(400).send({errors : [{msg : "bad cred "}]})
   }
   const token = jwt.sign (
      {
         id : foundUser._id 
      } , 
      process.env.SECRETKEY ,
      { expiresIn : "24h" } 
    )
   res.status(200).send ({msg : "login succ " , user: foundUser  , token })

} catch (error) {
   res.status(400).send ("you have an error ")
    
}}