import React from "react";
import{allWeekRequest} from'../api/semana'

import '../css/style.css'
function AllWeek(){
  const user = window.localStorage.getItem('data')
  const allWeek=allWeekRequest()
  console.log(user)
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