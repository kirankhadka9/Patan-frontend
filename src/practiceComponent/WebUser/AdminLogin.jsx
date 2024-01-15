import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
const AdminLogin = () => {
  
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate=useNavigate()

  let onSubmit = async (e) => {
    e.preventDefault();
    console.log("form is submitted");
    let data = {
   
      email: email,
      password: password,
     
    };
   
   
    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/login`,
        method: "POST",
        data: data,
        
      });
      console.log(result)
      let token=result.data.data;
      localStorage.setItem("token",token)
      sessionStorage.setItem("token",token)
      navigate(`/admin`)
    }
     catch (error) {
      toast.error(error.response.data.message);
    }
  };


  return (
    <div>
      <ToastContainer></ToastContainer>
      <form onSubmit={onSubmit}>
       
    
        <br></br>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="eg:xyz@gmail.com"
            id="email"
            value={email}
            onChange={(e) => {
              // console.log(e.target.value)
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <br></br>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="eg:*88888"
            id="password"
            value={password}
            onChange={(e) => {
              // console.log(e.target.value)
              setPassword(e.target.value);
            }}
          ></input>
        </div>
       
        <br></br>
      
       
        {/* <div>
<label htmlFor="description">Description</label>
<textarea  placeholder="gjhhjjk" id="description"
value={description}
onChange={(e)=>{
// console.log(e.target.value)
setDescription(e.target.value)
}}
></textarea>
</div> */}

        <button type="submit" style={{cursor:"pointer"}}> Login</button>
        <br></br>
        <div
        style={{cursor:"pointer"}}
       onClick={()=>{
        navigate("/admin/forgot-password")
       }} >Forgot Password?</div>
      </form>
    </div>
  );
};

export default AdminLogin;
