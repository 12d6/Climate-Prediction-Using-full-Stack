import React from "react";
import { NavLink } from "react-router-dom";


import './index.css';

const Navbar = () => {
  // const changestyle = ({ isActive }) => {
  //   return {
  //     color: isActive ? "" : "black",
  //   };
  // };
  return (
    <div>
      <div>
        <nav>
          <ul className="d-block w-100">
            <div>
            <img  className="logo1"src="https://www.clipartkey.com/mpngs/m/120-1200293_climate-change-mitigation-icon-climate-change-logo-png.png" height="70px" width="70px" alt=" "></img>
              <h2 className="title">CLIMATE </h2>
              <li >
              <NavLink to="/" className="text">
               Home 
              </NavLink>
            </li>
            <li >
              <NavLink to="Weather" className="text">
                Climate Condition
              </NavLink>
            </li>

           
            <li >
              <NavLink to="Login"  className="text">
                Login
              </NavLink>
            </li>
            <li >
              <NavLink to="Register"  className="text">
                Register
              </NavLink>
            </li>

            </div>

           
            

           
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
