const passport= require('passport')
const User= require('../model/User')
const LocalStrategy=require('passport-local').Strategy

passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser(async(id, done)=>{
   const user= await User.findById(id)
   done(null, user)
})

passport.use('local-signIn', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done)=>{

const oneUser= await User.findOne({username: username})
if(!oneUser){
 return  done(null, false, req.flash('signInMessage', 'User not found'))
}
const matchPassword= await oneUser.comparePassword(password, oneUser.password)

if(!matchPassword){
    return  done(null, false, req.flash('signInMessage', 'Incorrect Password'))
}
return  done(null, oneUser)
}))
