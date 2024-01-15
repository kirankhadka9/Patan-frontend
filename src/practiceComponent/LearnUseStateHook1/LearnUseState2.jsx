import React, { useState } from 'react'

const LearnUseState2 = () => {
    let [count,setCount]=useState(0)
    let Increment=(e)=>{
   
    if (count<10){
        setCount(count+1)
    }
    }
    let Decrement=(e)=>{
     if (count>0){
        setCount(count-1)
     }
    }
    let Reset=(e)=>{
        setCount(0)
    }

  return (
    <div>
      The value is  {count} <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
        LearnUseState2</div>
  )
}

export default LearnUseState2