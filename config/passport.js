const passport= require('passport')
const User= require('../model/User')
const LocalStrategy=require('passport-local').Strategy



passport.use('local-signIn', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done)=>{
 //return console.log(typeof username)  
 const oneUser= await User.findOne({username: username})
 //return console.log(oneUser)
if(!oneUser){
 return  done(null, false, 'User not found')
}
const matchPassword= await oneUser.comparePassword(password, oneUser.password)

if(!matchPassword){
    return  done(null, false, 'Incorrect Password')
}
//return console.log(oneUser)
  return await done(null, oneUser)

}))


passport.use('local-signUp', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password,done)=>{
const exist= await User.findOne({username: username})
if(exist){
return done(false, null, req.flash('signUpMessage','Already exist user'))
}
if(username==null || password==null){
    return done(false, null, req.flash('signUpMessage','Empty field') )
}
const newUser= new User()
newUser.username= username
newUser.password= await newUser.encriptPassword(password)
await newUser.save()
return await done(false, newUser)

}))


passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser(async(id, done)=>{
   const user= await User.findById(id)
   done(null, user)
})