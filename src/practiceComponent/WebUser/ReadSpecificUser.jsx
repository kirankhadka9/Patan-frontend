import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom'
import React, {useEffect, useState} from 'react'

const ReadSpecificUser = () => {
    let token= localStorage.getItem("token");
   let [user,setUser]=useState({});
   let navigate= useNavigate();
  let params= useParams();
  let id= params.id;

    let getAdminUser=async()=>{
      try{
        let result=await axios({
          url: `http://localhost:8000/web-users/${id}`,
        method: "GET",
        headers:{
          Authorization: `Bearer ${token}` 
        },
        })
        setUser(result.data.data)
         console.log(result);
      } catch(error){

      }
    }
    
    useEffect(()=>{
      getAdminUser();
    },[]);
  return( 
  <div>
  <p> Full Name: {user.fullName}</p>
            <p> Gender: {user.gender}</p>
            <p> Date of Birth: {user.dob}</p>
            <p> Email: {user.email}</p>
            <p> Role: {user.role}</p>
    <button
    onClick={()=>{
      navigate("/admin/user-update");
    }}
    >Update User
    </button>
    </div>
  )
}

export default ReadSpecificUser
