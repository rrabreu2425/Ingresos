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




app.get('/api', (req, res)=>{
res.send('Welcome to the page Incoms');
});




const PORT= process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server runing in the port ${PORT}`);
});
initConexion();
