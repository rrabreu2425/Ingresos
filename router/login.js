const express= require('express')
const userSchema= require('../model/User')
const passport = require('passport')
const userRouter= express.Router()

const app= express()

app.use('/api/ingresos/', userRouter)


userRouter.get('/login', (req, res)=>{
res.render('login', {user: req.user})
})

userRouter.post('/login', passport.authenticate('local-signIn',{
    successRedirect:'/api/ingresos/semanas/home',
    failureRedirect:'/api/ingresos/login',
    passReqToCallback:true
}))
userRouter.get('/logout', function(req, res, next){
   req.logout(function(err){
    if(err)
        return next(err)
    res.redirect('login')
   })
    })

module.exports= userRouter