import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const ReadAllUsers = () => {
  let [user, setUser] = useState([]);
  let navigate = useNavigate();

  let getAllUser = async () => {
    let result = await axios({
      url: `http://localhost:8000/web-users`,
      method: "GET",
      headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
      
    });

   setUser(result.data.data);
  };
  
  

  let deleteUser = async (userId) => {
    try {
        
        console.log(userId)
      await axios({
        url: `http://localhost:8000/web-users/${userId}`,
        method: "DELETE",
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
      });
      getAllUser();
      toast('🦄 User deleted succesfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (error) {
      console.error("Product not deleted");
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div>
      <ToastContainer/>
      {user.map((item, i) => {
        return (
          <div
            key={i}
            style={{ border: "solid red 3px", marginBottom: "20px" }}
          >
            <p> Full Name: {item.fullName}</p>
            <p> Gender: {item.gender}</p>
            <p> Date of Birth: {item.dob}</p>
            <p> Email: {item.email}</p>
            <p> Role: {item.role}</p>
            <button
              style={{ marginRight: "30px" }}
              onClick={() => {
                navigate(`/admin/${item._id}`);
              }}
            >
              View
            </button>
            <button style={{ marginRight: "30px"  }} 
            onClick={()=>{
              navigate(`/admin/update/${item._id}`)
            }}
            >Edit</button>
            <button
              style={{ marginRight: "30px" }}
              onClick={() => {
                deleteUser(item._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllUsers