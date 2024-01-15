import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {useNavigate} from "react-router-dom"

const UpdatePassword = () => {
  let [oldPassword, setOldPassword] = useState("");
  let [newPassword, setNewPassword] = useState("");
  
  let navigate=useNavigate();
  let token=localStorage.getItem("token")
  

  let onSubmit = async (e) => {
    e.preventDefault();
    console.log("form is submitted");
    let data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };


    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/update-password`,
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
        <div>
          <label htmlFor="oldPassword">Old Password:</label>
          <input
            type="password"
            placeholder=""
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => {
              // console.log(e.target.value)
              setOldPassword(e.target.value);
            }}
          ></input>
        </div>
        
        <br></br>
        <div>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            placeholder=""
            id="newPassword"
            value={newPassword}
            onChange={(e) => {
              // console.log(e.target.value)
              setNewPassword(e.target.value);
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

export default UpdatePassword;
