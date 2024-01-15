import React from 'react'
// local storage is the browser's memory for particular url
// the data in local storage persist even when the session end
//which means during(tab close )
const AddToLocalStorage = () => {
    let token="122233234354354"

    localStorage.setItem("token",token)
    localStorage.setItem("name","Akash")
    localStorage.setItem("age","29")
    localStorage.setItem("isMarried","false")
  return ( 
    <div>AddToLocalStorage</div>
  )
}

export default AddToLocalStorage