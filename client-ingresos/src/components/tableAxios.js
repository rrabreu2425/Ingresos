import { useState, useEffect } from "react";
import axios from "axios";
export async function AllWeeks(){
    const isLoged = window.localStorage.getItem('isLoged')
    const username=window.localStorage.getItem('username')
    const id=window.localStorage.getItem('id')
    const conexion={}
    const data={
        isLoged:isLoged,
        username:username,
    }
    const[weeks, setWeeks]=useState([])
 
        await axios.post('http://localhost:8081/api/ingresos/semanas/all', data)
        .then((response) => {
        setWeeks(response.data)
        })
        .catch((error) => {
            console.log(error);
        });    
 
    return weeks
} 