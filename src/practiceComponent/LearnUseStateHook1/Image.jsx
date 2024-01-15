import React, { useState } from 'react'
const ShowAndHideImage1 = () => {
    let [image, setShow] = useState (true)
    let handleImage = (isVisible)=>{
        return (e)=>{
            setShow(isVisible)
        }
    }
  return (
    <div>
        {
        image? <img src="./logo512.png" alt="logo"></img>
        :null
        }
        <br />
        <button onClick = {handleImage(true)}>Show image</button>
        <br />
        <button onClick = {handleImage(false)}>Hide Image</button>
    </div>
  )
}
export default ShowAndHideImage1
//We use handleImg when we do not need to pass value
//(e)=>{}
//We use handleImg() when we need to pass value
// ()=>{return((e)=>{})}