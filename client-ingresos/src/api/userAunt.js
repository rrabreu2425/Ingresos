import axios from 'axios'
const URL='http://localhost:8081/api/ingresos'
export const signUpRequest=(user)=>axios.post(`${URL}/signup`, user)