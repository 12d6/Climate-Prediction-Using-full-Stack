
import React from 'react';
import Navbar from './Navbar';
import Home from './details/Home';
// import Aboutus from './details/Aboutus';

import {Route,Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Weather from './components/Weather';
const App = () => {
  return (
    <div>
     
     <Navbar/>
 <Routes>
               
 <Route path="/" element ={<Home/>}/>
 <Route path="Weather" element={<Weather/>}/>
  <Route path="Login" element={<Login/>}/> 
  <Route path="Register" element={<Register/>}/> 

                
 </Routes>
    </div>
  );
};

export default App;