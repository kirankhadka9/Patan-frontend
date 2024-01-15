import axios from "axios";
import {useNavigate} from 'react-router-dom'
import React, {useEffect, useState} from 'react'

const AdminProfile = () => {
    let token= localStorage.getItem("token");
   let [profile,setProfile]=useState({});
   let navigate= useNavigate();

    let getAdminProfile=async()=>{
      try{
        let result=await axios({
          url: "http://localhost:8000/web-users/my-profile",
        method: "GET",
        headers:{
          Authorization: `Bearer ${token}` 
        } 
        })
        setProfile(result.data.data)
         console.log(result);
      } catch(error){

      }
    }
    
    useEffect(()=>{
      getAdminProfile();
    },[]);
  return( 
  <div>
  <p> Full Name: {profile.fullName}</p>
            <p> Gender: {profile.gender}</p>
            <p> Date of Birth: {profile.dob}</p>
            <p> Email: {profile.email}</p>
            <p> Role: {profile.role}</p>
    <button
    onClick={()=>{
      navigate("/admin/profile-update");
    }}
    >Update Profile
    </button>
    </div>
  )
}

export default AdminProfile
