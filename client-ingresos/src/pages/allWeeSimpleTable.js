import { MdOutlineDelete } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import '../css/allWeekSimpleTable.css'

function AllWeekSimpleTable() {
  const navigate = useNavigate()
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



  async function deleteWeek(week) {
    await axios.post('http://localhost:8081/api/ingresos/semanas/delete', week)
      .then((response) => {
        setWeeks(response.data)
        
      })
      .catch((error) => {
        console.log(error);
      })
      navigate('/allIngresosT')
  }


  return (

    <div className='table'>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Monto</th>
            <th scope="col">Fecha Inicio Semana</th>
            <th scope="col">Fecha Final de Semana</th>
            <th scope="col">Cantidad de horas</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) =>
            <tr>
              <td>{week.monto}</td>
              <td>{week.fechaInicioSemana}</td>
              <td>{week.fechaFinalSemana}</td>
              <td>{week.cantHorasTrabajadas}</td>
              <td><div className="icon" onClick={() => deleteWeek(week)}>
                <MdOutlineDelete />
              </div>
              </td>
            </tr>
          )
          }
        </tbody>
      </table>
    </div>


  )
}
export default AllWeekSimpleTable