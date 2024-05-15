const express = require('express');
const controller = require('../controller/semanas');
const schemaSemanas = require('../model/semanas');


const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const routerSemanas = express.Router();
const app = express();
app.use('/api/ingresos/semanas', routerSemanas);

routerSemanas.get('/', controller.allDataSemanas)
routerSemanas.get('/calcdescuento/:id', controller.calDescuento)
routerSemanas.get('/addSemana',controller.addSemanaGet)
routerSemanas.get('/delete',controller.deleteSemanaGet)

routerSemanas.use(bodyParser.urlencoded({extended: false}))
routerSemanas.use(bodyParser.json())

routerSemanas.post('/', controller.newSemana)

routerSemanas.delete('/:idSemana', controller.deleteSemana)

routerSemanas.put('/:id', controller.updateSemana)

module.exports = routerSemanas;