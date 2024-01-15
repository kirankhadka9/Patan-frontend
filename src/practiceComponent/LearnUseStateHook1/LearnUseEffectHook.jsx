import React, { useEffect, useState } from 'react'
const LearnUseEffectHook = () => {
    let [count, setCount] = useState(0)
    let [count2, setCount2] = useState(100)
    useEffect (()=>{
        console.log("I am use effect")
    },[count, count2]) //Here, the first rendering will go smoothly for both count and count2. But for second rendering, it will depend on the dependency count and count2
    useEffect(()=>{
      console.log("I am use effect 2")
    },[count]) //Here, the the first rendering will go smoothly for both count and count2. But for second rendering, it will depend on the dependency 'count' only.
    useEffect(()=>{
      console.log("I am use effect 3")
    },[]) // here, the first rendering will go smoothly for both count and count2. But for second rendering, it will not because the dependency is empty.
    useEffect(()=>{
      console.log("I am use effect 4")
    },) //Here, this use effect function will render with every execution since it has no dependencies.
    //Since, it has no dependencies, this type of use effect function is useless.
    console.log("######")
  return (
    <div>
        The count is: {count}
        <br />
        <button onClick = {(e)=>{
            setCount(count+1)
        }}>Increment</button>
        <br />
        The count is: {count2}
        <br />
        <button onClick = {(e)=>{
            setCount2(count2+1)
        }}>Increment count 2</button>
    </div>
  )
}
