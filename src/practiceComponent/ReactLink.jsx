import React from 'react'
import { NavLink } from 'react-router-dom'

const ReactLink = () => {
  return (
    <div>
      
       <NavLink to="/products/create" style={{marginRight:"20px"}}>Create Product</NavLink> 
       <NavLink to="/products"style={{marginRight:"20px"}}> Product</NavLink>
         <NavLink to="/students/create"style={{marginRight:"20px"}}>Create Students</NavLink>
         <NavLink to="/students"style={{marginRight:"20px"}}> Student</NavLink>  
         <NavLink to="/admin/register" style={{marginRight:"20px"}}> AdminRegister</NavLink>
         <NavLink to="/admin/login" style={{marginRight:"20px"}}> Admin Login</NavLink>
         <NavLink to="/admin/my-profile" style={{marginRight:"20px"}}> Profile</NavLink>
         <NavLink to="/admin/update-password" style={{marginRight:"20px"}}> Update password</NavLink>
         <NavLink to="/admin/logout" style={{marginRight:"20px"}}> Log Out</NavLink>
         <NavLink to="/admin/read-all-users" style={{marginRight:"20px"}}>Read all users</NavLink>
         
        MyLinks</div>
  )
}

export default ReactLink