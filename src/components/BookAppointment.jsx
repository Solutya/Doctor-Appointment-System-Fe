import React, { useState } from "react";
import "../styles/bookappointment.css";
import axios from "axios";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";

const BookAppointment = ({ setModalOpen, ele, appointments }) => {
  const [formDetails, setFormDetails] = useState({
    date: "",
    time: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };


//chng




// const countAppointmentsForDoctor = (doctorId) => {
//   if (!appointments || appointments.length === 0) {
//     return 0; // Return 0 appointments if the array is undefined or empty
//   }
  
//   const uniqueAppointments = {};
//   appointments.forEach((appointment) => {
//     if (appointment.doctorId._id === doctorId) {
//       uniqueAppointments[appointment.userId._id] = true;
//     }
//   });
  
//   return Object.keys(uniqueAppointments).length;
// };

// const MAX_APPOINTMENTS_PER_DOCTOR = 3;

// const isAppointmentLimitReached = (doctorId) => {
//   const doctorAppointmentsCount = countAppointmentsForDoctor(doctorId);
//   return doctorAppointmentsCount <= MAX_APPOINTMENTS_PER_DOCTOR;
// };





//new chng 
// const countAppointmentsForDoctorOnDate = (doctorId, date) => {
//   if (!appointments || appointments.length === 0) {
//     return 0; // Return 0 appointments if the array is undefined or empty
//   }

//   return appointments.filter(
//     (appointment) =>
//       appointment.doctorId._id === doctorId && appointment.date === date
//   ).length;
// };

// const MAX_APPOINTMENTS_PER_DAY_PER_DOCTOR = 6;

// const isAppointmentLimitReached = (    doctorId, date) => {
//   const appointmentsCountOnDate = countAppointmentsForDoctorOnDate(
//     doctorId,
//     date
//   );
//   return appointmentsCountOnDate <= MAX_APPOINTMENTS_PER_DAY_PER_DOCTOR;
// };







  const bookAppointment = async (e) => {
    e.preventDefault();




    //chng

    // if (isAppointmentLimitReached()) {
    //   toast.error("Appointment limit reached for this doctor");
    //   return;
    // }




    try {
      await toast.promise(
        axios.post(
          "/appointment/bookappointment",
          {
            doctorId: ele?.userId?._id,
            date: formDetails.date,
            time: formDetails.time,
            doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Appointment booked successfully",
          error: "Unable to book appointment",
          loading: "Booking appointment...",
        }
      );
      setModalOpen(false);
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <div className="modal flex-center">
        <div className="modal__content">
          <h2 className="page-heading">Book Appointment</h2>
          <IoMdClose
            onClick={() => {
              setModalOpen(false);
            }}
            className="close-btn"
          />
          <div className="register-container flex-center book">
            <form className="register-form">
              <input
                type="date"
                name="date"
                className="form-input"
                value={formDetails.date}
                onChange={inputChange}
              />
              <input
                type="time"
                name="time"
                className="form-input"
                value={formDetails.time}
                onChange={inputChange}
              />
              <button
                type="submit"
                className="btn form-btn"
                onClick={bookAppointment}
              >
                book
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
