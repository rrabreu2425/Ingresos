const express = require('express');
const controller = require('../controller/semanas');
const schemaSemanas = require('../model/semanas');
const { default: mongoose } = require('mongoose');
const routerSemanas = express.Router();
const app = express();
app.use('/api/ingresos/semanas', routerSemanas);

routerSemanas.get('/', controller.allDataSemanas)

routerSemanas.post('/', controller.newSemana)
routerSemanas.delete('/:idSemana', controller.deleteSemana)
routerSemanas.put('/:id', controller.updateSemana)
module.exports = routerSemanas;