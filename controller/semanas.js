const schemaSemanas = require('../model/semanas');
const controller = {}

//all data collection Semana
controller.allDataSemanas = async (req, res) => {
    //{ userId: req.user._id }
    try {
        const datos = await schemaSemanas.find({ userId: req.body.id })      
        res.send(datos)
    }
    catch (err) {
        console.log(err);
    }
}

//
controller.getHome = (req, res) => {
     return res.render('index', { user: req.user })
}

//

controller.addSemanaGet = (req, res) => {

    res.render('addSemana', { user: req.user })
}

controller.deleteSemanaGet = async (req, res) => {
    try {
        res.render('deleteSemana', { user: req.user })
    }
    catch (err) {
        console.log(err)
    }

}

//
controller.descuentoGet = async (req, res) => {
    try {
        res.render('descuento', { user: req.user })
    }
    catch (err) {
        console.log(err)
    }

}

// add new semana ingresos
controller.newSemana = async (req, res) => {
    try {
        if (req.body.monto!=='' && req.body.fechaInicioSemana!=='' &&req.body.fechaFinalSemana!=='' && req.body.cantHorasTrabajadas!==''){
                const newWeek = new schemaSemanas({
                monto: req.body.monto,
                fechaInicioSemana: req.body.fechaInicioSemana,
                fechaFinalSemana: req.body.fechaFinalSemana,
                cantHorasTrabajadas: req.body.cantHorasTrabajadas,
                userId: req.body.userID
            })
            const result=await schemaSemanas.create(newWeek);
            if(result){
                //const datos = await schemaSemanas.find({ userId: req.body.userID })
                res.send(true)
            }
            else{
                res.send(false)
            }
            //const datos = await schemaSemanas.find({ userId: req.user._id })
           // const user = req.user
            //res.render('allSemanas', { datos, user })

        }
        else{
            return res.render('addSemana', { user: req.user }) 
        }
    }
    catch (err) {
        console.log(err)
    }
}

//calc descuento semana
controller.descuento = async (req, res) => {
    try {
        const fechas = req.body
        const objectFechaInicio = new Date(fechas.FechaInicioSemana)
        const objectFechaFinal = new Date(fechas.FechaFinalSemana)
        const semana = await schemaSemanas.find({
            fechaInicioSemana: objectFechaInicio,
            fechaFinalSemana: objectFechaFinal
        })
        if (semana.lenth = !0) {
            const descuento = (semana[0].cantHorasTrabajadas * 26) - semana[0].monto
            const user = req.user
            res.render('infoDescuento', { descuento, fechas, user })
        }


    }
    catch (err) {
        console.log(err)
    }
}
//delete Elemento
controller.deleteSemana = async (req, res) => {
    try {
        
        const week = req.body
        const objectFechaInicio = new Date(week.fechaInicioSemana)
        const objectFechaFinal = new Date(week.fechaFinalSemana)
        const result=await schemaSemanas.deleteOne({
            fechaInicioSemana: objectFechaInicio,
            fechaFinalSemana: objectFechaFinal,
            userId: week.userId
        })
        const datos = await schemaSemanas.find({ userId: week.userId })
        res.send(datos)
        res.render('allSemanas', { user: req.user, datos })
    }
    catch (err) {
        console.log(err)
    }
}

//update semana segun el _id
controller.updateSemana = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        await schemaSemanas.findOneAndUpdate({ _id: id }, body)
    }
    catch (err) {
        console.log(err)
    }

}
module.exports = controller
