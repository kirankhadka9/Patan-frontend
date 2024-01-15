
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const ReadAllStudents = () => {
  let [students, setStudent] = useState([])
  let navigate = useNavigate()
  let getAllStudents = async ()=>{
    let result = await axios({
      url : `http://localhost:8000/students`,
      method: "GET"
    })
    setStudent (result.data.result)
  }
  let deleteStudent = async (studentId)=>{
    try {
      await axios ({
        url: `http://localhost:8000/students/${studentId}`,
        method: "DELETE"
      })
      getAllStudents()
      toast.success ("Student Deleted Successfully",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } catch (error) {
      console.log("Student not deleted")
    }
  }
  useEffect(()=>{
    getAllStudents()
  },[])
 
  return (
    <div>
      <ToastContainer/>
      {
        students.map((item,i)=>{
          return(
          <div key = {i} style={{border:"solid grey 3px", marginBottom:"20px"}}>
            <p> The student's name is {item.name}</p>
            <p> The student's age is {item.age}</p>
            <p> Is the student married?: {item.isMarried? 'Yes' : 'No'}</p>
            <button style={{marginRight:"30px"}} onClick={()=>{
              navigate(`/students/${item._id}`)
            }}>View</button>
            <button style={{marginRight:"30px"}}
            onClick={(e)=>{
              navigate(`/students/update/${item._id}`)
            }}
            >Edit</button>
            <button style={{marginRight:"30px"}}
            onClick={()=>{
              deleteStudent(item._id)
            }}>Delete</button>
          </div>
          )
        })
      }
    </div>
  )
}
export default ReadAllStudents

