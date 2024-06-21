// require mongoose 
const mongoose= require ("mongoose") ; 

// schema 

const {Schema , model} = mongoose ; 

// create schema 
const UserSchema = new Schema ({
    name : {type : string , require : true},
    email : {type : string , require : true},
    password : {type : string , require : true},
    phone : Number ,


})

module.exports = User = model ('user', UserSchema)