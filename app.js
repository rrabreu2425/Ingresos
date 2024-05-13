const express= require('express');
const dotenv = require('dotenv');
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const initConexion= require('./data/db');
const {semanas}= require('./data/datos').ingresos;



const app= express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routerSemanas=require('./router/semanas');

app.use('/api/ingresos/semanas', routerSemanas);
app.set('view engine', 'ejs');
app.get('/api', (req, res)=>{
res.render('index');
});
const PORT= process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server runing in the port ${PORT}`);
});
initConexion();
