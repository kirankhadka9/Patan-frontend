import React from 'react'

const EffectOnDifferentData = () => {
    let name = "nitan";
    let age = 29;
    let isMarried = true;
    let favFood = [<div>yomari</div>, <div>chicken</div>];
    let info = { address: "gagal", fatherName: "shiva" };
  return (
    <div>name is {name}
    <br></br>
    Age is {age}
    <br></br>
    {favFood}
    <br></br>
    Are you married? {isMarried?"false":"true"}
    </div>
  )
}

export default EffectOnDifferentData