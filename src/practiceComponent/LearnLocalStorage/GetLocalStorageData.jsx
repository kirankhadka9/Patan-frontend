import React from 'react'

const GetLocalStorageData = () => {
    console.log(localStorage.getItem("name"))
    console.log(localStorage.getItem("age"))
    console.log(localStorage.getItem("isMarried"))
    console.log(localStorage.getItem("token"))
  return (
    <div>GetLocalStorageData</div>
  )
}

export default GetLocalStorageData