import './App.css';
import axios from "axios";
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import AddWeek from './pages/addWeek';
import AllWeek from './pages/allWeek';
import Layout from './pages/layout';
import DeleteWeek from './pages/deleteWeek';
import Descount from './pages/calcDesc';

import Home from './pages/home';
import ProtectedRoute from './protected/protectedRoute';
import { useEffect, useState } from 'react';
function App() {

  
  const data={
      isLoged:window.localStorage.getItem('isLoged'),
      id:window.localStorage.getItem('id'),
  }
  const[weeks, setWeeks]=useState()
  const respuesta=async()=>{
    await axios.post('http://localhost:8081/api/ingresos/semanas/all', data)
  .then((response) => {
   setWeeks(response.data)
  })
  .catch((error) => {
      console.log(error);
  })

}
useEffect(()=>{
  respuesta()
},[])
  return (
    <div className="App">
    
      <BrowserRouter>
      <Layout/>
        <Routes>
        <Route path="signUp" element={<SignUp/>} />
        <Route path="signIn" element={<SignIn/>} />
          <Route element={<ProtectedRoute/>}>
              <Route path='home'   element={<Home/>} />
              <Route path="allIngresos" element={<AllWeek
                                                      weeks={weeks}/>} />
              <Route path="addIngresos" element={<AddWeek/>} />
              <Route path="delete" element={<DeleteWeek/>} />
              <Route path="discount" element={<Descount/>} />
          </Route>  
          <Route path='*' element={<Navigate to='signIn'/>}/>    
        </Routes>
      </BrowserRouter>


 

  </div>

        
  );
}

export default App;
