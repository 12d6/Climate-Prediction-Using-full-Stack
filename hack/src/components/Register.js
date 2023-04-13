import React,{useState} from "react";
import "./Register.css";
import axios from "axios";
const Register = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // const [confirm, setConfirm] = useState("");
  const [pin, setPin] = useState("");
  const [gender, setGender] = useState("");
  const [place, setPlace] = useState("");
  const display = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/Register", {
        phone: phone,
        password: password,
        
        pin: pin,
        gender: gender,
        place: place,
      })
      .then(() => {
        alert("Inserted Successfully");
      });
  };
  return (
    <div className="signup">
      <div className="signuplogo">
        <i className="fa fa-user-plus" aria-hidden="true"></i>
      </div>
      <br />
      <h2>Register</h2>
      <form onSubmit={display}>
        &nbsp; &nbsp; <i class="fa fa-phone" aria-hidden="true"></i>{" "}
        <input type="number" placeholder="Phone Number"  onChange={(event) => {
            setPhone(event.target.value);
          }}></input>
        <br />
        &nbsp; &nbsp;<i className="fa fa-key" aria-hidden="true"></i>
        <input type="password" placeholder="Password"  onChange={(event) => {
            setPassword(event.target.value);
          }}></input>
        <br />
        {/* &nbsp; &nbsp; <i class="fa fa-check" aria-hidden="true"></i>{" "}
        <input type="password" placeholder="Confirm Password"  onChange={(event) => {
            setConfirm(event.target.value);
          }}></input>
        <br /> */}
        &nbsp; &nbsp; <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        <input type="number" placeholder="Pincode"  onChange={(event) => {
            setPin(event.target.value);
          }}></input>
        <br />
        <br />
        &nbsp;&nbsp;
        <i class="fa fa-venus-double" aria-hidden="true">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </i>
        <select
          name="Gender"
          onChange={(event) => {
            setGender(event.target.value);
          }}
        >
          <option value={"select Gender"}>SelectYour Gender</option>
          <option value={"male"}>Male</option>
          <option value={"female"}>Female</option>
          <option value={"others"}>Others</option>
        </select>
        <br />
        &nbsp;&nbsp;<i class="fa fa-address-card" aria-hidden="true"></i>
        <input type="text" placeholder="Address"  onChange={(event) => {
            setPlace(event.target.value);
          }}></input>
        <br />
        <br />
        <input type="submit" value="REGISTER" className="regbtn"></input>
      </form>
    </div>
  );
};

export default Register;
