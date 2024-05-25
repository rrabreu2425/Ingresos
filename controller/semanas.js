const schemaSemanas = require('../model/semanas');
const controller = {}

//all data collection Semana
controller.allDataSemanas = async (req, res) => {
    try {
        const datos = await schemaSemanas.find()
     //return console.log(typeof datos[0].fechaFinalSemana)
        res.render('allSemanas',{datos});
    }
    catch (err) {
        console.log(err);
    }
}

//

controller.addSemanaGet = (req, res)=>{
res.render('addSemana')
}
//
controller.deleteSemanaGet= async(req, res)=>{
    try{
 //const datos = await schemaSemanas.find()
  res.render('deleteSemana')
    }
catch(err){
console.log(err)
}

}

// add new semana ingresos
controller.newSemana = async (req, res) => {
    try{
        const datos= req.body
        await schemaSemanas.create(datos);
        res.redirect('/api/ingresos/semanas/')

    }
    catch(err){
   console.log(err)
    }
}

//calc descuento semana

controller.calDescuento= async(req, res)=>{
    try{
        const id= req.params.id
        const semana= await schemaSemanas.find({_id:id})
        const descuento = semana[0].cantHorasTrabajadas
        console.log((semana[0].cantHorasTrabajadas*25)-semana[0].monto)
    }
    catch(err){
        console.log(err)
    }
    

}
//delete Elemento
controller.deleteSemana = async (req, res) => {
      try {
        const fechas= req.body
        const objectFechaInicio= new Date(fechas.FechaInicioSemana)
        const objectFechaFinal= new Date(fechas.FechaFinalSemana)
        //console.log(objectFechaInicio)
        //const datos = await schemaSemanas.find()
        await schemaSemanas.deleteOne({
            fechaInicioSemana: objectFechaInicio,
            fechaFinalSemana: objectFechaFinal
        })
        res.redirect('/api/ingresos/semanas/')
    }
    catch (err) {
        console.log(err)
    }
}

//update semana segun el _id
controller.updateSemana=async(req, res)=>{
    try{
        const id=req.params.id
        const body= req.body
        await schemaSemanas.findOneAndUpdate({_id: id}, body)
    }
    catch(err){
console.log(err)
    }

}
module.exports = controller;
