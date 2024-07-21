const express= require('express')
const controller= require('../controller/user.js')


const userRouter= express.Router()


const app= express()

app.use('/api/ingresos/', userRouter)


userRouter.get('/login', (req, res)=>{
   res.render('login', {user: req.user})
})
userRouter.get('/signup', controller.getLogin)
userRouter.get('/sendUser', controller.sendUserApi)
userRouter.post('/login',controller.postLogin, (req, res)=>{
    res.send(req.user)
})
userRouter.post('/signup',controller.postSignUp, (req, res)=>{
    res.send(req.user)
})
userRouter.get('/logout', controller.getLogOut)

module.exports= userRouter