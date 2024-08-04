import React, {useState, useEffect} from "react";
import axios from "axios";
import '../css/style.css'
import DataTable from 'react-data-table-component'


 function AllWeekDataTable(){

  const data = {
    isLoged: window.localStorage.getItem('isLoged'),
    id: window.localStorage.getItem('id'),
  }
  const [weeks, setWeeks] = useState([])
  const respuesta = async () => {
    await axios.post('http://localhost:8081/api/ingresos/semanas/all', data)
      .then((response) => {
        setWeeks(response.data)
      })
      .catch((error) => {
        console.log(error);
      })

  }
  useEffect(() => {
    respuesta()
  }, [])

const columns=[{
name:'Monto',
selector: row => row.monto
},
{
  name:'Fecha Inicio Semana',
  selector: row => row.fechaInicioSemana
},
{
  name:'Fecha Final Semana',
  selector: row => row.fechaFinalSemana
},
{
  name:'Cant. de Horas Trabajadas',
  selector: row => row.cantHorasTrabajadas
}
]
    return(
        <div>
        <DataTable
        title='All weeks'
        columns={columns}
        data={weeks}
        selectableRows
        pagination
        fixedHeader/>
      </div>
    )
    }
    export default AllWeekDataTable