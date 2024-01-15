import React from 'react'

const LearnMap1 = () => {
    let names=["Bibek","Sachet","Kiran"]
    let printNames=()=>{
        let list=names.map((value,i)=>{
            return <div>My best friend is {value}</div> 
  
    })
  return list
}
return <div>
  {printNames()}  
</div>

  
}

export default LearnMap1