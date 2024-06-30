const express = require('express');
const controller = require('../controller/semanas');
const schemaSemanas = require('../model/semanas');
const routerSemanas = express.Router()

const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use('/api/ingresos/semanas', routerSemanas);
routerSemanas.use((req, res, next)=>{
    if(req.isAuthenticated()){
        next()
    }else{
        res.render('login', {user: req.user})
    }        
    
})
routerSemanas.use(bodyParser.urlencoded({extended: false}))
routerSemanas.use(bodyParser.json())


routerSemanas.get('/all', controller.allDataSemanas)
routerSemanas.get('/addSemana',controller.addSemanaGet)
routerSemanas.get('/delete',controller.deleteSemanaGet)
routerSemanas.get('/descuento',controller.descuentoGet)
routerSemanas.get('/home', controller.getHome);

routerSemanas.post('/newSemana', controller.newSemana)
routerSemanas.post('/descuento', controller.descuento)
routerSemanas.post('/delete', controller.deleteSemana)
routerSemanas.put('/:id', controller.updateSemana)

module.exports = routerSemanas
