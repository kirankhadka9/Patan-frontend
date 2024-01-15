import React from 'react'

export const Location = ({country, province, district, exactLocation}) => {
  return (
    <div>
        Your country name is {country} <br>
        </br>
        Your province no is {province} <br></br>
        You belong to {district} district <br></br>
        your  pecular location is
       {exactLocation} </div>
  )
}
