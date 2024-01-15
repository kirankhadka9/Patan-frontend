import React, { useState } from 'react'

const Form2 = () => {
    let onSubmit =(e)=>{
        e.preventDefault()
        let data={
            isMarried:isMarried
        }
        console.log(data)
    }
    let[isMarried,setMarried]=useState(false)
  return (
    <div>
          <label htmlFor="isMarried">IsMarried:</label>
           <input type="checkbox" id="isMarried"
           checked={isMarried === true}
           onChange={(e)=>{
            // console.log(e.target.value)
            setMarried(e.target.checked)
           }}
           
           ></input>
  <form onSubmit={onSubmit}>
<div>

</div>


            <button type="submit"> Proceed</button>

        </form>
    </div>
  )
}

export default Form2