import './App.css';
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import AddWeek from './pages/addWeek';
import AllWeekDataTable from './pages/allWeekDataTable';
import AllWeekSimpleTable from './pages/allWeeSimpleTable';
import Layout from './pages/layout';
import DeleteWeek from './pages/deleteWeek';
import Descount from './pages/calcDesc';


import Home from './pages/home';
import ProtectedRoute from './protected/protectedRoute';
import { useEffect, useState } from 'react';
function App() {


 
  return (
    <div className="App">

      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="signUp" element={<SignUp />} />
          <Route path="signIn" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path='home' element={<Home />} />
            <Route path="allIngresosDT" element={<AllWeekDataTable
              />} />
            <Route path="allIngresosT" element={<AllWeekSimpleTable
               />} />
            <Route path="addIngresos" element={<AddWeek />} />
            <Route path="delete" element={<DeleteWeek />} />
            <Route path="discount" element={<Descount />} />
          </Route>
          <Route path='*' element={<Navigate to='signIn' />} />
        </Routes>
      </BrowserRouter>




    </div>


  );
}

export default App;
