
const mongoose= require('mongoose');
const user= 'rrabreu2425';
const pasw='NNxUY3K8YbDzGDlQ';
const db= 'Yastrenky';
const DB_URL=`mongodb+srv://${user}:${pasw}@cluster0.asqcvgv.mongodb.net/${db}?retryWrites=true&w=majority&appName=Cluster0`;
module.exports=()=>{

    const conexion=()=>{
         mongoose.connect(DB_URL)
        .then(()=>console.log('Conexion BD'))
        .catch((err)=>console.log(err));
              
    }
conexion();
}