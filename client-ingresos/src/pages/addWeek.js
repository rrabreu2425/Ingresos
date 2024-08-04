import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import '../css/style.css'
import Label from "../components/label"
import Input from "../components/input"
import Button from "../components/button"
import axios from "axios"

function AddWeek() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const onSubmit=handleSubmit(async(value)=>{
       
       const data={
        monto:value.monto,
        fechaInicioSemana:value.fechaInicioSemana,
        fechaFinalSemana:value.fechaFinalSemana,
        cantHorasTrabajadas:value.cantHorasTrabajadas,
        userID:window.localStorage.getItem('id')
       }
       await axios.post('http://localhost:8081/api/ingresos/semanas/newSemana', data)
       .then((response) => {
        navigate('/allIngresosT')
      })
      .catch((error) => {
        console.log(error);
      })
       console.log(data)
    })


    return (

        <div className="container">
            <h5>Adicionar Nuevo Ingreso</h5>
            <form onSubmit={onSubmit}>
                <Label
                    title='Monto' />
                <input
                    type='Number'
                    className="form-control"
                    name='monto'
                    placeholder='Monto'
                    {...register('monto', { required: true })}
                />  <Label
                    title='Fecha Inicio Semana' />

                <input type='Date'
                    className="form-control"
                    name='fechaInicioSemana'
                    placeholder='Fecha Inicio Semana'
                    {...register('fechaInicioSemana', { required: true })} />

                <Label
                    title='Fecha Final Semana' />

                <input type='Date'
                    className="form-control"
                    name='fechaFinalSemana'
                    placeholder='Fecha Final Semana'
                    {...register('fechaFinalSemana', { required: true })} />

                <Label
                    title='Cantidad de Horas Trabajadas' />

                <input
                    type='Number'
                    className="form-control"
                    name='cantHorasTrabajadas'
                    placeholder='Cant. Horas Trabajadas'
                    {...register('cantHorasTrabajadas', { required: true })} />

                <Button
                    type='submit'
                    name='Add' />
            </form>
        </div >
    )
}
export default AddWeek