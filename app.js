const express= require('express');
const dotenv = require('dotenv');
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const initConexion= require('./data/db');
const {semanas}= require('./data/datos').ingresos;
const routerSemanas=require('./router/semanas');
//const db= require('./data/db');

const app= express();
dotenv.config();

app.use(bodyParser.json({
    limit: '30mb'
}))
app.use(bodyParser.urlencoded({
    limit: '20mb',
    extended: true
}))



app.use('/api/ingresos/semanas', routerSemanas);

app.set('view engine', 'ejs')
//app.set('view', './views')



app.get('/api', (req, res)=>{
res.render('index');
});




const PORT= process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server runing in the port ${PORT}`);
});
initConexion();
