import React from 'react'

const GetDataOfSessionStorage = () => {
    console.log(sessionStorage.getItem("token"))
  return (
    <div>GetDataOfSessionStorage</div>
  )
}

export default GetDataOfSessionStorage