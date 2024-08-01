import React, {useState} from "react";
import '../css/style.css'
import axios from "axios";
import allWeeks from "../api/semana";



 function AllWeek(){

  const[res, setRes]=useState()

  const isLoged = window.localStorage.getItem('isLoged')
const username=window.localStorage.getItem('username')
const id=window.localStorage.getItem('id')

const data={
    isLoged:isLoged,
    username:username,
    id:id
}

 async function allWeeks(data) {
   await axios
        .post('http://localhost:8081/api/ingresos/semanas/all', data)
        .then((response) => {
          //setRes(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
}

  console.log(res)
    return(
        <div className='table'>
        <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Monto</th>
            <th scope="col">Fecha Inicio Semana</th>
            <th scope="col">Fecha Final de Semana</th>
            <th scope="col">Cantidad de horas</th>
          </tr>
        </thead>
        <tbody>
           
          <tr>
            
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          
         </tbody>
      </table>
      </div>
    )
    }
    export default AllWeek