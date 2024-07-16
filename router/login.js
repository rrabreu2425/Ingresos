const express= require('express')
const controller= require('../controller/user')

const validateSchema=require('../midelware/validatorMidelware.js')
const userRouter= express.Router()


const app= express()

app.use('/api/ingresos/', userRouter)


userRouter.get('/login', (req, res)=>{
res.render('login', {user: req.user})
})
userRouter.get('/signup', controller.getLogin)
userRouter.post('/login',controller.postLogin)
userRouter.post('/signup',controller.postSignUp)
userRouter.get('/logout', controller.getLogOut)

module.exports= userRouter