// require mongoose 
const mongoose = require ('mongoose')


// connect 
const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.DB_URI) ;
        console.log('database connected')
        
    } catch (error) {
        console.log('failed to connect ')
        
    }
}
// exports
module.exports = connectDB ;