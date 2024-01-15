import React from 'react'

const Infopass = () => {
  let name = "Akash";
  let age = 24;
  let fatherDetail ={ firstName: "Lok", lastName: "Nepal" };
  let favFood=[<div>Momo</div>,<div>chicken</div>,<div>spinach</div>];
  return (
    <div>
 {name}
        <br></br>
        {age}
        <br></br>
        {fatherDetail.firstName}
        <br></br>
        {fatherDetail.lastName}
        <br></br>
        {favFood}


        
    </div>
  )
}

export default Infopass