import React from 'react'

const RemoveLocallStorageData = () => {
  return (
    <div>
        
       <button onClick={()=>{
localStorage.removeItem("name")
       }}> Remove Name </button>
       
       <button onClick={()=>{
localStorage.removeItem("age")
       }}> Remove Age </button>
              <button onClick={()=>{
localStorage.removeItem("token")
       }}> Remove token </button>

<button onClick={()=>{
localStorage.removeItem("isMarried")
       }}> Remove isMarried </button>
       
       
       </div>



       
  )
}

export default RemoveLocallStorageData