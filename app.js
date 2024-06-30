const express= require('express');
const expressSesion= require('express-session')
const dotenv = require('dotenv');
const bodyParser= require('body-parser');
const initConexion= require('./data/db');
const routerSemanas=require('./router/semanas')
const userRouter=require('./router/login')
const passport= require('passport')
const flash=require('connect-flash')
require('./config/passport')

const app= express();
dotenv.config();
app.set('view engine', 'ejs')



//midelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSesion({
    secret:'mysecretsession',
    resave: false,
    saveUninitialized:false
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use((req, res, next)=>{
   // app.locals.signUpMessage= req.flash('signUpMessage')
    //app.locals.userCreated= req.flash('userCreated')
    app.locals.signInMessage= req.flash('signInMessage')
    next()
})


app.use('/api/ingresos/semanas', routerSemanas);
app.use('/api/ingresos', userRouter)





const PORT= process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server runing in the port ${PORT}`);
});
initConexion();
