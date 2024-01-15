import React, { useState } from 'react'

export const LearnUseStateHook1 = () => {
    // ne method to define variable using Usestate
    let [name,setName]=useState("Akash")
    let [age,setAge]=useState("28")
    let handleClick=(e)=>{
        // changing name
        setName ("ram")
        
    }
    let handleAge=(e)=>{
        setAge("23")
    }
  return (
    // calling name
    <div>my name is {name}
 <button onClick={handleClick}> change Name</button>
    my age is {age} <button onClick={handleAge}> change age</button>
    </div>
  )
}
