import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CreateStudent = () => {
  let [name, setName] = useState();
  let [age, setAge] = useState();
  let [isMarried, setIsMarried] = useState(false);

  let onSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      age: age,
      isMarried: isMarried,
    };

    try {
      let result = await axios({
        url: `http://localhost:8000/students`,
        method: "POST",
        data: data,
      });
      console.log(result);
      setName("");
      setAge("");
      setIsMarried(false);

      toast.success(result.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      // console.log(error)
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Student Name:</label>
          <input
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
          ></input>
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            placeholder="Enter student's age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            id="age"
          ></input>
        </div>

        <div>
          <label htmlFor="isMarried">Are you Married?</label>
          <input
            type="checkbox"
            id="isMarried"
            checked={isMarried === true}
            onChange={(e) => {
              setIsMarried(e.target.checked);
            }}
          ></input>
        </div>

        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default CreateStudent;