import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {
  let[name,setName]=useState("")
  let[price,setPrice]=useState("")
  let [quantity,setQuantity]=useState("")
  let params=useParams()
  let getProduct = async () => {
    let result = await axios({
      url: `http://localhost:8000/products/${params.id}`,
      method: "GET",
    });

  let data=result.data.result
  setName(data.name)
  setPrice(data.price)
  setPrice(data.quantity)
  };

  useEffect(() => {
    getProduct();
  }, []);

  let onSubmit= async(e)=>{
    e.preventDefault();



    let data={
      name:name,
      price:price,
      quantity:quantity
    }
try {
  let result=await axios({
    url:`http://localhost:8000/products/${params.id}`,
    method:"PATCH",
    data:data
  })
  setName("");
  setPrice("")
  setQuantity("")
  
  toast(result.data.message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
//  console.log(result)
} catch (error) {
  //console.log(error)
  toast.error('🦄 Products cannot be created !', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
  }
  return (
    <div>
      <ToastContainer />

<form onSubmit={onSubmit}>

<label htmlFor='name'>Name</label>
<input type="name" placeholder="name" id="name"
value={name}
onChange={(e)=>{
    // console.log(e.target.value)
    setName(e.target.value)
   }}></input>
   <br></br>
<label htmlFor='price'> Price</label>

<input type="number" placeholder="name" id="price"
value={price}
onChange={(e)=>{
    // console.log(e.target.value)
    setPrice(e.target.value)
   }}></input>
   <br></br>
<label htmlFor='quantity'>Quantity</label>
<input type="number" placeholder="name" id="quantity"
value={quantity}
onChange={(e)=>{
    // console.log(e.target.value)
    setQuantity(e.target.value)
   }}></input>
<br></br>
<button type="submit"> Update</button>

</form>

    </div>
  )
}

export default UpdateProduct