import React, { useEffect, useState } from "react";
import Empty from "../components/Empty";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import fetchData from "../helper/apiCall";
import { setLoading } from "../redux/reducers/rootSlice";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import toast from "react-hot-toast";
import moment from 'moment-timezone'; 
import "../styles/user.css";
import { useReactToPrint } from "react-to-print";
import { useRef } from 'react';



const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);
  const { userId } = jwt_decode(localStorage.getItem("token"));

  const getAllAppoint = async (e) => {
    try {
      dispatch(setLoading(true));
      const temp = await fetchData(
        `/appointment/getallappointments?search=${userId}`
      );
      setAppointments(temp);
      dispatch(setLoading(false));
    } catch (error) {}
  };

  useEffect(() => {
    getAllAppoint();
  }, []);





  const complete = async (ele) => {
    try {
      await toast.promise(
        axios.put(
          "/appointment/completed",
          {
            appointid: ele?._id,
            doctorId: ele?.doctorId?._id,
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

      getAllAppoint();
    } catch (error) {
      return error;
    }
  };




  //chng

  // const rejected = async (ele) => {
  //   try {
  //     await toast.promise(
  //       axios.put(
  //         "/appointment/rejected",
  //         {
  //           appointid: ele?._id,
  //           doctorId: ele?.doctorId?._id,
  //           doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         }
  //       ),
  //       {
  //         success: "Appointment rejected successfully",
  //         error: "Unable to book appointment",
  //         loading: "Booking appointment...",
  //       }
  //     );

  //     getAllAppoint();
  //   } catch (error) {
  //     return error;
  //   }
  // };








  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });




  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <section className="container notif-section">
          <h2 className="page-heading">Your Appointments</h2>

          <button className="btn" onClick={handlePrint}>Print</button> 

          {appointments.length > 0 ? (
            <div className="appointments">

  <div style={{ }} ref={componentRef}>
{/* <div ref={componentRef}> */}
              <table className="table-data">
                <thead>
               




                  <tr >
                    <th>S.No</th>
                    <th>Doctor</th>
                    <th>Patient</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    <th>Booking Date</th>
                    <th>Booking Time</th>
                    <th>Status</th>
                    
               

                    {userId === appointments[0].doctorId?._id ? (
                      <th>Action</th>
                    ) : (
                      <></>
                    )}



                  </tr>
                </thead>
                <tbody>
                  {appointments?.map((ele, i) => {
                    const createdAtDhaka = moment(ele?.createdAt).tz('Asia/Dhaka').format('YYYY-MM-DD ');
                    const updatedAtDhaka = moment(ele?.updatedAt).tz('Asia/Dhaka').format(' HH:mm:ss');
                    return (
                      <tr key={ele?._id}>
                        <td>{i + 1}</td>
                        <td>
                          {ele?.doctorId?.firstname +
                            " " +
                            ele?.doctorId?.lastname}
                        </td>
                        <td>
                          {ele?.userId?.firstname + " " + ele?.userId?.lastname}
                        </td>
                        <td>{ele?.date}</td>
                        <td>{ele?.time}</td>
                        <td>{createdAtDhaka}</td>
                        <td>{updatedAtDhaka}</td>
                        <td>{ele?.status}</td>
                        {userId === ele?.doctorId?._id ? (
                          <td>


                            <button
                              className={`btn user-btn accept-btn ${
                                ele?.status === "Completed" ? "disable-btn" : ""
                              }`}
                              disabled={ele?.status === "Completed"}
                              onClick={() => complete(ele)}
                            >
                              Accept
                            </button>

                            
                            {/* <button
                              className={`btn user-btn accept-btn ${
                                ele?.status === "rejected" ? "disable-btn" : ""
                              }`}
                              disabled={ele?.status === "rejected"}
                              onClick={() => complete(ele)}
                            >
                              Reject
                            </button> */}



                          </td>





                        ) : (
                          <></>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            
              </div>

            </div>
          ) : (
            <Empty />
          )}

   
        </section>
      )}
      {/* <Footer /> */}
    </>
  );
};
export default Appointments;
