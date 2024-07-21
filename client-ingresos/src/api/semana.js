import axios from 'axios'
const URL='http://localhost:8081/api/ingresos/semanas'
export const allWeekRequest=axios.post(`${URL}/all`)
