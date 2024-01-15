import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {useNavigate} from "react-router-dom"

const AdminProfileUpdate = () => {
  let [fullName, setfullName] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("male");
  let navigate=useNavigate();
  let token=localStorage.getItem("token")
  

  let onSubmit = async (e) => {
    e.preventDefault();
    console.log("form is submitted");
    let data = {
      fullName: fullName,
      gender: gender,
      dob: dob,
    };


    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/update-profile`,
        method: "PATCH",
        data: data,
        headers:{
            Authorization: `Bearer ${token}`,
        }
      });
     
      navigate("/admin/my-profile")
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  let getAdminProfile=async()=>{
    try{
      let result=await axios({
        url: "http://localhost:8000/web-users/my-profile",
      method: "GET",
      headers:{
        Authorization: `Bearer ${token}` 
      } 
      })
     let data= result.data.data;
     setDob(data.dob)
     setfullName(data.fullName)
     setGender(data.gender)
    } catch(error){

    }
  }
  useEffect(()=>{
    getAdminProfile();
  },[]);

  return (
    <div>
      <ToastContainer></ToastContainer>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="fullName">FullName:</label>
          <input
            type="text"
            placeholder="eg:Kiran"
            id="fullName"
            value={fullName}
            onChange={(e) => {
              // console.log(e.target.value)
              setfullName(e.target.value);
            }}
          ></input>
        </div>
        
        <br></br>
        <div>
          <label htmlFor="dob">DOB</label>
          <input
            type="date"
            placeholder="2050/01/01"
            id="dob"
            value={dob}
            onChange={(e) => {
              // console.log(e.target.value)
              setDob(e.target.value);
            }}
          ></input>
        </div>
        <br></br>
        <div>
        <label htmlFor="gender">Select Gender :</label>
        <select 
        id="gender"
        value={gender}
        onChange={(e)=>{
            setGender(e.target.value)
        }}>
         
         {
            genders.map((item, i) => {
                  return (
                    <option key={i} value={item.value}>
                      {item.label}
                    </option>
                  );
                })
         }
       
          
        </select>
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

        <button type="submit">Update </button>
      </form>
    </div>
  );
};

export default AdminProfileUpdate;
