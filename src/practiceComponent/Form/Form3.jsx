import React, { useState } from 'react'

const Form3 = () => {
    let [day,setDay]=useState("day1")
    let [gender,setGender]=useState("male")
    let onSubmit=(e)=>{
        e.preventDefault()
      let data={
        day:day,
        gender:gender
      }
      console.log(data)
    }
    let days = [
        {
          label: "Sunday",
          value: "day1",
        },
        {
          label: "Monday",
          value: "day2",
        },
        {
          label: "Tuesday",
          value: "day3",
        },
        {
          label: "Wednesday",
          value: "day4",
        },
        {
          label: "Thursday",
          value: "day5",
        },
        {
          label: "Friday",
          value: "day6",
        },
        {
          label: "Saturday",
          value: "day7",
        },
    ]
    let genders = [
        {label:"Male", value:"male"},
        {label:"Female", value:"female"},
        {label:"Other", value:"other"},
    
      ]
  return (
    <div>
<form onSubmit={onSubmit}>
    <select value={day} onChange={(e)=>{
        setDay(e.target.value)
    }}>
      
    {/* <option value="day1">Sunday</option>
    <option value="day2">Monday</option>
    <option value="day3">Tuesday</option>
    <option value="day4">Wednesday</option>
    <option value="day5">Thursday</option>
    <option value="day6">Friday</option>
    <option value="day7">Saturday</option> */}
 {
    
    days.map ((item,i)=>{
        return (<option value = {item.value} key={i}>{item.label}</option>)
    })
   

    }



</select>
<select value = {gender}
        onChange={(e)=>{
            setGender (e.target.value)
        }}>
            {
                genders.map ((Item,i)=>{
                    return (<option value = {Item.value}key={i}>{Item.label}</option>)
                })
            }
        </select>
        <div>
            <label> Gender</label>
        </div>
    
    <button type="submit">Proceed</button>
</form>

    </div>
    
  )
}

export default Form3