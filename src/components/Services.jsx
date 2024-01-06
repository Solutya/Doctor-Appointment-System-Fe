import React from "react";
import icon01 from "../images/icon01.png";
import icon02 from "../images/icon02.png";
import icon03 from "../images/icon03.png";
import image01 from "../images/about.png";
import { NavLink } from "react-router-dom";
import "../styles/services.css"

// import Serviceslist from "../components/Serviceslist.jsx"
const Services = () => {
  return (
    <>
      <section className="container">
        <div className="page-heading ">
        <h2 >Providing The Best <br/> Medical Service.</h2>
        <p>World-class care for everyone. our health System offers unmatched,
              expert health care.</p>
        </div>
        <div className="all-item">
        <div className="first-item">
             <div>
                <img src={icon01} alt="icon01" />
            </div> 
             <div>
             <NavLink to={"/doctors"}> <h2>Find a Doctors</h2></NavLink>
                <p> World-class care for everyone. our health System offers
                  unmatched, expert health care. From the lab to the clinic.</p>
             </div>
        </div>
        <div>
             <div>
            <img src={icon02} alt="icon02" />
            </div> 
             <div>
             <NavLink to={"/Serviceslist"}> <h2>Our Service</h2></NavLink>
                <p> World-class care for everyone. our health System offers
                  unmatched, expert health care. From the lab to the clinic.</p>
             </div>
        </div>
        <div>
             <div>
                <img src={icon03} alt="icon03" />
            </div> 
             <div>
             <NavLink to={"/doctors"}> <h2>Book Appointment</h2></NavLink>
                <p> World-class care for everyone. our health System offers
                  unmatched, expert health care. From the lab to the clinic.</p>
             </div>
        </div>
        </div>
      </section>

     {/* another section */}

     <section>
        <div className="virtual">
          <div className="img">
            <img src={image01} alt="" />
          </div>

          <div className="treatment">
              <h2>
                Get  treatment <br /> anytime.
              </h2>

              <ul className="list" >
                <li>
                  1.Schedule the appointment directly.
                </li>
                <li >
                  2.Search for your phudician here , and contact their office.
                </li>
                <li >
                  3.View our physians who are accepting new patients , use the
                  online schedule tool to select an appointment time.
                </li>
                
              </ul>
              {/* <NavLink to={"/Serviceslist"}> 
               <button className="btn"> See More</button> 
                </NavLink> */}
            </div>
         
        </div>
     </section>

    </>
  );
};

export default Services;
