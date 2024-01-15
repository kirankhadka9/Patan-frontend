import React from 'react'

const ButtonClick = () => {
    let handleClick=(e)=>{
        console.log("button is clicked")
    }
  return (
    <div>
   <button onClick={handleClick}> Click here </button></div>
  )
}

export default ButtonClick