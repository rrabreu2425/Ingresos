import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import AddWeek from './pages/addWeek';
import AllWeek from './pages/allWeek';
import Layout from './pages/layout';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
      <div className='Header'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="allIngresos" element={<AllWeek />} />
          <Route path="addIngresos" element={<AddWeek />} />
         </Route>
      </Routes>
    </BrowserRouter>
      </div>
      <div className='principal-container'>
         
      </div>
  
    </div>
  );
}

export default App;
