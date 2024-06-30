const mongoos = require('mongoose')
const bcryptjs= require('bcryptjs')

const UserSchema= new mongoos.Schema({
    username : String,
    password: String,
})


UserSchema.methods.encriptPassword= async(password)=>{
return await bcryptjs.hashSync(password, bcryptjs.genSaltSync(10))
}

UserSchema.methods.comparePassword=async(password, passHashed)=>{
    return await bcryptjs.compare(password, passHashed) 

 }

const User= new mongoos.model('User', UserSchema)
module.exports= User