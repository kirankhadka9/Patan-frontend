import React, { useEffect } from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom'
import axios from "axios";


const AdminVerify =() => {
  let [query]=useSearchParams()
  let token= query.get("token")
  let navigate=useNavigate()
  console.log("***",token)
  let verifyEmail=async()=>{
try{
  let result=await axios({
    url:"http://localhost:8000/web-users/verify-email",
    method: "POST",
    headers:{
      "Authorization":`Bearer ${token}`
    }

  });
  navigate(`/admin/login`)
}catch(error){
  console.log(error);
}
}
  
  useEffect(()=>{
verifyEmail();
  },[])
  return (
    <div>Congratulation
      
    </div>
  )
}

export default AdminVerify