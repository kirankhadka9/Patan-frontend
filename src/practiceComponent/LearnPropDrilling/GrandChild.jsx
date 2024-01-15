import React, { useContext } from 'react'
import { Context1,Context2} from '../../App';

const GrandChild = (props) => {
    let value =useContext(Context1);
    let value2 =useContext(Context2);
   
  return (
    <div>
      GrandChild
    Your name is   {value.name}<br></br>
   Your age is    {value.age}<br></br>
   your location is {value2.address}<br></br>
   <button
   onClick={()=>{
    value.setName("hari");
   }}>Change Name</button>
   <br></br>
   <button
   onClick={()=>{
    value2.setAddress("baneshwor");
   }}>Address</button>
    </div>

  )
}

export default GrandChild
