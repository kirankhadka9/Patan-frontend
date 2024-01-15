import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AdminRegister = () => {
  let [fullName, setfullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("male");


  let onSubmit = async (e) => {
    e.preventDefault();
    console.log("form is submitted");
    let data = {
      fullName: fullName,

      email: email,
      password: password,
      gender: gender,
      dob: dob,
    };
    // console.log(data)
    data = {
      ...data,
      role: "Admin",
    };
    try {
      let result = await axios({
        url: `http://localhost:8000/web-users`,
        method: "POST",
        data: data,
      });
      toast.success("An link has been sent to your email.Please click the below link to verify");
      setfullName("")
      setEmail("")
      setDob("")
      setPassword("")
      setGender("male")
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

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

        <button type="submit"> Proceed</button>
      </form>
    </div>
  );
};

export default AdminRegister;
