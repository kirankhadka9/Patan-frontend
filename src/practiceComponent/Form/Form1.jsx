import React, { useState } from 'react'

const Form1 = () => {
    let onSubmit=(e)=>{
        e.preventDefault();
        console.log("form is submitted")
        let data={
            name:name,
            surname:surname,
            email:email,
            password:password

        }
        console.log(data)
    }
    let[name,setName]=useState("")
    let[surname,setSurName]=useState("")
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let[phoneNumber,setPhoneNumber]=useState("")
    let[dob,setDob]=useState("")
    let[description,setDescription]=useState("")
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div>
           <label htmlFor="name">Name:</label>
           <input type="text" placeholder="eg:Akash" id="name"
           value={name}
           onChange={(e)=>{
            // console.log(e.target.value)
            setName(e.target.value)
           }}
           
           ></input>
  
  
            </div>
<br>
</br>
<div>
           <label htmlFor="surname">SurName:</label>
           <input type="text" placeholder="eg:Nepal" id="surname"
           value={surname}
           onChange={(e)=>{
            // console.log(e.target.value)
            setSurName(e.target.value)
           }}
           
           ></input>
  
  
            </div>
            <br>
            </br>
            <div>
           <label htmlFor="email">Email:</label>
           <input type="email" placeholder="eg:xyz@gmail.com" id="email"
           value={email}
           onChange={(e)=>{
            // console.log(e.target.value)
            setEmail(e.target.value)
           }}
           
           ></input>
  
  
            </div>
            <br></br>
<div>
<label htmlFor="password">Password:</label>
<input type="password" placeholder="eg:*88888" id="password"
value={password}
onChange={(e)=>{
    // console.log(e.target.value)
    setPassword(e.target.value)
   }}
></input>
</div>
<br></br>
<div>
<label htmlFor="phoneNumber">PhoneNumber</label>
<input type="number" placeholder="eg:88888" id="phoneNumber"
value={phoneNumber}
onChange={(e)=>{
    // console.log(e.target.value)
    setPhoneNumber(e.target.value)
   }}
></input>
</div>
<br></br>
<div>
<label htmlFor="dob">DOB</label>
<input type="date" placeholder="2075/2/12" id="dob"
value={dob}
onChange={(e)=>{
    // console.log(e.target.value)
    setDob(e.target.value)
   }}
></input>
</div>
<br></br>
<div>
<label htmlFor="password">Password:</label>
<input type="password" placeholder="eg:*88888" id="password"
value={password}
onChange={(e)=>{
    // console.log(e.target.value)
    setPassword(e.target.value)
   }}
></input>
</div>
<br></br>
<div>
<label htmlFor="description">Description</label>
<textarea  placeholder="gjhhjjk" id="description"
value={description}
onChange={(e)=>{
    // console.log(e.target.value)
    setDescription(e.target.value)
   }}
></textarea>
</div>




            <button type="submit"> Proceed</button>
        </form>
    </div> 
  )
}

export default Form1