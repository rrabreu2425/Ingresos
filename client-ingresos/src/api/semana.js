import axios from "axios";
const isLoged = window.localStorage.getItem('isLoged')
const username=window.localStorage.getItem('username')
const id=window.localStorage.getItem('id')
const conexion={}
const data={
    isLoged:isLoged,
    username:username,
    id:id
}

export default async function allWeeks(data) {
   await axios
        .post('http://localhost:8081/api/ingresos/semanas/all', data)
        .then((response) => {
        return response.data
        })
        .catch((error) => {
            console.log(error);
        });
}



