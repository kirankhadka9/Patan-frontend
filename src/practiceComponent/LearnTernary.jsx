import React from 'react'

export const LearnTernary = () => {
    let age=16
    let marks=45
  return (
    <div>
        {
            marks<=39? <div>Fail </div>
            : marks>=40 && marks<=59 ? <div> Third divison</div>
            : marks>=60 && marks<=79 ? <div> First divison</div>
            : marks>=40 && marks<=59 ? <div> Distinction</div>
            : null
            // age<18?<div> underage</div>:
            // age>=18&& age<=60 ?<div> Age suitable </div>
            // : <div> Old age </div>
        }
        
        </div>
  )
}
