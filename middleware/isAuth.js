const jwt = require ('jsonwebtoken')
const User = require ("../Modal/User")

const isAuth = async (req ,res, next)=> {
    try {
        // token 
        const token = req.headers("authorization")
        if (!token) {
            return res.status(400).send("not authorized ")
        }
        const decoded = iwt.verify(process.env.SECRETKEY)
        const foundUser = await User.findOne ({_id : decoded._id})
        if (!foundUser) {
            return res.status(400).send("not authorized ")

        }
        req.user = foundUser;
        next() 
    } catch (error) {
        return res.status(400).send("not authorized ")

        
    }
}
module.exports = isAuth ;