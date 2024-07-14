const mongoos = require('mongoose');
const semanasSchemas = new mongoos.Schema({
    monto: Number,
    fechaInicioSemana: Date,
    fechaFinalSemana: Date,
    cantHorasTrabajadas: Number,
    userId:{
        type: mongoos.Schema.ObjectId,
        ref: 'User',
        require: true
    }
});

const Semanas = new mongoos.model('Semanas', semanasSchemas);
module.exports= Semanas;