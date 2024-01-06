import React from "react";
import image1 from "../images/hero-img01.png";
import image2 from "../images/hero-img02.png";
import image3 from "../images/hero-img03.png";

import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
        We help patients <br/>live a healthy,<br/> longer life.
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          tenetur doloremque molestias repellat minus asperiores in aperiam
          dolor, quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Aspernatur, sunt?molestias repellat minus asperiores in aperiam
          dolor, quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Aspernatur, sunt?
        </p>
       
      </div>
     

        <div className="img-section">
              <div>
                <img className="one" src={image1} alt="" />
              </div>
              <div className="second">
                <img src={image2} alt="" className="third" />
                <img src={image3} alt=""  />
              </div>
            </div>



    </section>
  );
};

export default Hero;
