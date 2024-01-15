import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {useNavigate, useSearchParams} from "react-router-dom"

const AdminResetPassword = () => {
  
  let [password, setPassword] = useState("");
  
  let navigate=useNavigate();
 let [params]= useSearchParams()
 let token= params.get("token")
  

  let onSubmit = async (e) => {
    e.preventDefault();
    console.log("form is submitted");
    let data = {
     
      password: password,
    };


    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/reset-password`,
        method: "PATCH",
        data: data,
        headers:{
            Authorization: `Bearer ${token}`,
        }
      });

      localStorage.removeItem("token");
      navigate("/admin/login");
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
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            placeholder=""
            id="password"
            value={password}
            onChange={(e) => {
              // console.log(e.target.value)
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <br></br>
        
        <br></br>


        <button type="submit" style={{cursor:"pointer"}}>Update Password</button>
      </form>
    </div>
  );
};

export default AdminResetPassword