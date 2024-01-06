import React from "react";
import image from "../images/aboutimg.jpg";
import "../styles/services.css";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h1 className="page-heading about-heading">About Us</h1>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content">
            <p>
            The doctor appointment system ”streamlines scheduling and managing appointments between
             patients and doctor’s using various mediums like online platforms, mobile apps, or 
             traditional phone-based methods. It leverages technology to offer patients the convenience
              of booking appointments, checking doctor list, get notification and have access of own profile.
               Together with doctor can able to check all patient list and accept the appointment
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
