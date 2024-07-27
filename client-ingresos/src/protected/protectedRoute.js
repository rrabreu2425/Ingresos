import {Navigate, Outlet} from 'react-router-dom'
const ProtectedRoute=()=>{
const isLoged= window.localStorage.getItem('isLoged')
return isLoged==='true'?<Outlet/>:<Navigate to='login'/>
}
export default ProtectedRoute