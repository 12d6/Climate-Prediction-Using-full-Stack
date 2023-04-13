import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Full from './Full.js';





const Home = () => {
  return (
    <div className="Carousel">
      <Carousel>
        <Carousel.Item interval={1000} className="carousel">
          <img
            className="d-block w-100"
            src="https://www.skymetweather.com/content/wp-content/uploads/2019/05/Northeast-Weather-1.jpg" height="500px"  

            alt="First slide"
          />
          <Carousel.Caption>
            
            <h1  className="text-white ">BLOOM WHERE YOU ARE PLANTED </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://ak0.picdn.net/shutterstock/videos/7192990/thumb/1.jpg?i10c=img.resize(height:160)"height="500px" 
            alt="Second slide"
          />
          <Carousel.Caption>
           
            <h1 className="text-white ">I AM NOT AGING I JUST NEED REPOTTING.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.agrifarming.in/wp-content/uploads/2016/10/Fish-Culture-in-Paddy-Fileds.jpg"height="500px"
            alt="Third slide"
          />
          <Carousel.Caption>
            
            <h1 className="text-white ">
              HE WHO PLANTS A GARDEN PLANTS HAPPINESS.
           </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <Full/>
     
    </div>
    
  );
};

export default Home;
