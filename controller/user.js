
const passport = require('passport')
const controller= {}


controller.getLogin= (req, res)=>{
   // return console.log(req.user)
    res.render('signup', {user: req.user})
    }

controller.postLogin= passport.authenticate('local-signIn')
controller.postSignUp= passport.authenticate('local-signUp')

controller.sendUserApi= (req, res)=>{
     return console.log(req.user)
    const user= req.user
    res.send(user)
    
}

controller.getLogOut= function(req, res, next){
    req.logout(function(err){
     if(err)
         return next(err)
     res.redirect('login')
    })
     }


module.exports= controller