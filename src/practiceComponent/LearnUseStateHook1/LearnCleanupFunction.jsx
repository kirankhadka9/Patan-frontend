import React, { useEffect, useState } from 'react'

const LearnCleanupFunction = () => {
    let [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("I am use Effect")
        return()=>{

        }
    },[count])
    // 

    /// What happens when us effect function will be executed


    // when component gets unmount nothing gets executed  except clean up function

    //lifeCycle method of component
    //{ component did mount
    //useEffect function will run

    // component did update
    //useEffect function will run only if dependancy changes
    // component did unmount
    //=> nothing but clean up function will execute
    


    //}
  return (
    <div>Count1 is {count} 
    <br>
    </br>
    <button onClick = {()=>{
            setCount(count+1)        
        }}> Increase the Count </button>
    </div>
  )
}



export default LearnCleanupFunction