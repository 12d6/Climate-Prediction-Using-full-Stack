import "./weather.css";



import { useState } from "react";
// import axios from 'axios'
const api = {
  key: "e4d8f1c49fe3600c3e10fe3753abc824",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="weath">
       <h4 className="text-primary text-center" >Weather App</h4>
      <header className="weath-header">
        {/* HEADER  */}
       
<br/>
        {/* Search Box - Input + Button  */}
        <div className="data">
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
          <br/>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div className="weathdata">
            {/* Location  */}
            <br/><br/>
            <label>City:</label><p>{weather.name}</p><br/>

            {/* Temperature Celsius  */}
            <label>Temperature:</label><p>{weather.main.temp}°C</p><br/>

            {/* Condition (Sunny ) */}
            <label>About:</label><p>{weather.weather[0].main}</p><br/>
            <label>Description:</label><p>{weather.weather[0].description}</p><br/>
        {/* if({weather.main.temp}&gt20){
           axios
           .post("http://localhost:8080/send-text", {
             
           })
        } */}
          </div>
        
        ) : (
          ""
        )}
        
       
      </header>
    </div>
  );
}

export default App;