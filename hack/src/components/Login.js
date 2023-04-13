import React,{useState} from "react";
import axios from 'axios';
import "./Login.css";
import {useNavigate} from 'react-router-dom';

//import { NavLink } from "react-router-dom";
const Login = () => {
const [phone,setPhone]=useState("");
const[password,setPassword]=useState("");
const[logstat,setLogstat]=useState("");
let navigate=useNavigate();
const submit=(e)=>{
  axios.post("http://localhost:8080/Login",{
    phone:phone,
    password:password,
  }).then(function(response){
    if(response.data.message){
setLogstat(response.data.message)
if(logstat==="Login Successfully"){
  navigate('./Weather')
}

    }
    else{
      setLogstat(response.data[0].phone)
    }
  })
}
return(
    

  <div className="container">
  
  <div className="top">
    <div className="logo-header">
      <i className="fa fa-user-circle-o" aria-hidden="true"></i>{" "}
    </div><br />
    <h2>Login</h2>
    <form onSubmit={submit}>
      <input type="text" placeholder="Phone number or Email" onChange={(e)=>{
        setPhone(e.target.value);
      }}></input>
      <input type="password" placeholder="Password" onChange={(e)=>{
        setPassword(e.target.value);
      }}></input>
      <input type="submit" value="LOGIN" className="subbtn" onClick={()=>{submit()}}></input>
    </form>
    {/* <NavLink className="nav-link" to="/">
                  Forgot Password
                </NavLink> */}
  </div>
 
  </div>
  

);
              }
export default Login;
