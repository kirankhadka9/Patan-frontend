import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {useNavigate} from "react-router-dom"

const AdminForgotPassword = () => {
  
  let [email, setEmail] = useState("");
  
  let navigate=useNavigate();
  let token=localStorage.getItem("token")
  

  let onSubmit = async (e) => {
    e.preventDefault();
    console.log("form is submitted");
    let data = {
      
      email: email,
    };


    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/forgot-password`,
        method: "POST",
        data: data,
      });
      setEmail("");
      toast.success("A link has been sent to your email")
    //   localStorage.removeItem("token");
    //   navigate("/admin/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
 


  return (
    <div>
      <ToastContainer></ToastContainer>
      <form onSubmit={onSubmit}>
       
        
        <br></br>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              // console.log(e.target.value)
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <br></br>
        
        <br></br>


        <button type="submit" style={{cursor:"pointer"}}>Reset Password</button>
      </form>
    </div>
  );
};

export default AdminForgotPassword;
