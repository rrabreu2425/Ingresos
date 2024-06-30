const userSchema= require('../model/User')
const passport = require('passport')
const controller= {}


controller.getLogin= (req, res)=>{
    res.render('signup', {user: req.user})
    }

controller.postLogin= passport.authenticate('local-signIn',{
    successRedirect:'/api/ingresos/semanas/home',
    failureRedirect:'/api/ingresos/login',
    passReqToCallback:true
})

controller.postSignUp= passport.authenticate('local-signUp',{
    successRedirect:'/api/ingresos/semanas/home',
    failureRedirect:'/api/ingresos/signup',
    passReqToCallback:true
})

controller.getLogOut= function(req, res, next){
    req.logout(function(err){
     if(err)
         return next(err)
     res.redirect('login')
    })
     }


module.exports= controller