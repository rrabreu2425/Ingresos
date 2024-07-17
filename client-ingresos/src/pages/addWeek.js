import React from "react"
import '../css/style.css'
import Label from "../components/label"
import Input from "../components/input"
import Button from "../components/button"
function AddWeek() {
    return (

        <div className='container'>
            <h5>Adicionar Nuevo Ingreso</h5>
            <form method="post" action=''>
                <Label
                    title='Monto' />
                <Input
                    id='monto'
                    name='monto'
                    placeholder='Monto'
                    type='Number' />

                <Label
                    title='Fecha Inicio Semana' />
                <Input
                    id='fechaInicioSemana'
                    name='fechaInicioSemana'
                    placeholder='Fecha Inicio Semana'
                    type='Date' />

                <Label
                    title='Fecha Final Semana' />
                <Input
                    id='fechaFinalSemana'
                    name='fechaFinalSemana'
                    placeholder='Fecha Final Semana'
                    type='Date' />

                <Label
                    title='Cantidad de Horas Trabajadas' />
                <Input
                    id='cantHorasTrabajadas'
                    name='cantHorasTrabajadas'
                    placeholder='Cant. Horas Trabajadas'
                    type='Number' />

                <Button
                    type='submit'
                    name='Add' />
            </form>
        </div >
    )
}
export default AddWeek