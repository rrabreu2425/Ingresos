const express = require('express');
const controller = require('../controller/semanas.js');

const routerSemanas = express.Router()
const bodyParser = require('body-parser');
const app = express();

app.use('/api/ingresos/semanas', routerSemanas);

 //routerSemanas.use((req, res, next)=>{
    //if(req.isAuthenticated()){
       //return next()
    //}else{
        //res.render('login', {user: req.user})
   // }        
    
//})

routerSemanas.get('/all', controller.allDataSemanas)
routerSemanas.post('/all', controller.allDataSemanasPost)
routerSemanas.get('/addSemana', controller.addSemanaGet)
routerSemanas.get('/delete',controller.deleteSemanaGet)
routerSemanas.get('/descuento',controller.descuentoGet)
routerSemanas.get('/home', controller.getHome);

routerSemanas.post('/newSemana', controller.newSemana)
routerSemanas.post('/descuento', controller.descuento)
routerSemanas.post('/delete', controller.deleteSemana)
routerSemanas.put('/:id', controller.updateSemana)

module.exports = routerSemanas
