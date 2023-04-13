import React from 'react';
import { useNavigate } from 'react-router-dom';

const Full = () => {
   


    let navigate = useNavigate();
    const handleLogin=()=>{
        navigate("/Login")
    }
    const handleRegister=()=>{
        navigate("/Register")
    }
    const handleContactus=()=>{
        navigate("/Contactus")
    }
    const handleAboutus=()=>{
        navigate("/Decor")
    }
    return (
        <div>
            <div className="head-card">
      <div className="products-card">
      <img  className="size" src="https://i.pinimg.com/564x/e0/74/86/e07486f076fd4b11661f203557966f05.jpg" ></img>
      <h4>Login</h4>
      <button onClick={handleLogin}>Login here</button>
      </div>
      <div className="products-card">
      <img  className="size" src="https://i.pinimg.com/originals/72/14/09/721409a501a6122cbafc4f29eec69dc0.gif" ></img>
      <h4>Register</h4>
      
      <button onClick={handleRegister}>Signup here</button>
      </div>
      <div className="products-card">
      <img  className="size" src=" https://i.pinimg.com/564x/54/87/91/548791cd7e7cebf4e440a5987fb5f09d.jpg" ></img>
      <h4>Feel Free to Contact us</h4>
      <button onClick={handleContactus}>Know about climatic action</button>
      </div>
      
      

     </div>
        </div>
    );
};

export default Full ;