import React from 'react'

const RemoveSessionStorage = () => {
  return (
    <div>
           <button onClick={()=>{
sessionStorage.removeItem("token")
       }}> Remove Age </button>
    </div>
  )
}

export default RemoveSessionStorage
// session memory is browser memory for particular url in particular tab
//data will persist in given session (i.e dat will be removed when tab closes)