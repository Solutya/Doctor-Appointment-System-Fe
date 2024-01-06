import React from 'react'
import "../styles/services.css"
import Navbar from './Navbar'

// import { Link } from 'react-router-dom'

const Serviceslist = () => {
  return (
    <>
    <Navbar/>
      <h1 className='title'> OUR SERVICES </h1>
    <section className='serviceslist'>
    
        <div>
            
        <div className='services'>
         <h1 >Cancer Care</h1> 
         <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
         {/* <Link to ="/doctors"><button className='btn'>See More</button></Link>   */}
        </div>

        <div className='services'>
         <h1 >Labor & Delivery</h1> 
         <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p> 
         
        </div>

        <div className='services'>
         <h1>Heart & Vascular</h1> 
         <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
      
        </div>

        </div>
 
      <div>

      <div className='services'>
         <h1>Mental Health</h1> 
         <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
          
        </div>

        <div className='services'>
         <h1>Neurology</h1> 
         <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
          
        </div>

        <div className='services'>
         <h1>Burn Treatment</h1> 
         <p>World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
           
        </div>




      </div>
        
    </section>
    </>
  )
}

export default Serviceslist
