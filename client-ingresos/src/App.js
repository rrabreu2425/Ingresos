import './App.css';
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import AddWeek from './pages/addWeek';
import AllWeek from './pages/allWeek';
import Layout from './pages/layout';

import Home from './pages/home';
import ProtectedRoute from './protected/protectedRoute';
function App() {
  const isLoged= window.localStorage.getItem('isLoged')

  return (
    <div className="App">
    
      <BrowserRouter>
      <Layout/>
        <Routes>
        <Route path="signUp" element={<SignUp />} />
        <Route path="signIn" element={<SignIn />} />
          <Route element={<ProtectedRoute/>}>
              <Route path='home'   element={<Home />} />
              <Route path="allIngresos" element={<AllWeek />} />
              <Route path="addIngresos" element={<AddWeek />} />
           
          </Route>  
          <Route path='*' element={<Navigate to='signIn'/>}/>    
        </Routes>
      </BrowserRouter>


 

  </div>

        
  );
}

export default App;
