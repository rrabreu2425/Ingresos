import axios from 'axios'
const isLoged = window.localStorage.getItem('isLoged')
const username=window.localStorage.getItem('username')
const id=window.localStorage.getItem('id')
const data={
    isLoged:isLoged,
    username:username,
    id:id
}
const URL='http://localhost:8081/api/ingresos/semanas/all'
export const allWeekRequest=(user)=>axios.get(URL,data)
