const schemaSemanas = require('../model/semanas');
const controller = {}

//all data collection Semana
controller.allDataSemanas = async (req, res) => {
    try {
        const datos = await schemaSemanas.find()
        res.render('allSemanas',{datos});
    }
    catch (err) {
        console.log(err);
    }
}

// add new semana ingresos
controller.newSemana = async (req, res) => {
    const body = req.body;
    await schemaSemanas.create(body);
    console.log(body);

}

//calc descuento semana

controller.calDescuento= async(req, res)=>{
    try{
        const id= req.params.id
        const semana= await schemaSemanas.find(id)
        console.log(semana)
    }
    catch(err){
        console.log(err)
    }
    

}
//delete Elemento
controller.deleteSemana = async (req, res) => {
    try {
        let idSemana = req.params.idSemana;
        await schemaSemanas.deleteOne({
            _id: idSemana
        })
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
