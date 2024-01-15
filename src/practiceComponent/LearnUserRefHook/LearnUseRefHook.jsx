import React, { useRef } from 'react'

const LearnUseRefHook = () => {
    let ref1= useRef();
    let ref2=useRef()
    let refInput1=useRef()
    let refInput2=useRef()
  return (
    <div>
        <button onClick={(e)=>{
            refInput1.current.focus();
            // ref1.current.style.backgroundColor="red"
        }}> Change color of Babu </button>
        
        <button onClick={(e)=>{
            refInput2.current.focus();
            // ref2.current.style.backgroundColor="green"
        }}> Change color of Nani </button>
        <div ref={ref1}> Kiran</div>
        <div ref={ref2}> Anjali</div>
    <input ref={refInput1}></input>
    <input ref={refInput2}></input>
        </div>
  )
}

export default LearnUseRefHook