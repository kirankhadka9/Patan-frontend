import { Field } from 'formik'
import React from 'react'

export const FormikTextArea = ({name,label,type,onchange,required,...props}) => {
  return (
    <div>
             <Field name={name}>
                        { ({field,form,meta})=>{
                          
                                return(<div>
<label htmlFor={name}>{label}{required ?<span style={{color:"red"}}>*</span>:null}</label>
           <textarea
           {...field} 
           {...props}type={type} placeholder="eg:Akash" id={name}
           value={meta.value}
           
           onChange={field.onChange}// for single work
        //for multiple work
        //    onChange={(e)=>{ 
        //     // console.log(e.target.value)
        //     formik.setFieldValue("name",e.target.value)
        //    }}
           
           ></textarea>
          {meta.touched && meta.error?(
           <div style={{color:"red"}}>{meta.error}</div>
          ):null                 
          }               
                                </div>) 


                            
                            }
                        }
                     </Field>
                     

    </div>
  )
}
export default FormikTextArea