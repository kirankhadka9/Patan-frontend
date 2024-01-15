import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ReadSpecificStudent = () => {
  let params = useParams();

  let [student, setStudent] = useState({});

  let getStudent = async () => {
    let result = await axios({
      url: `http://localhost:8000/students/${params.id}`,
      method: "GET",
    });
    setStudent(result.data.result);
  };

  useEffect(() => {
    getStudent();
  }, []);
  return (
    <div>
    <p>The student's name is {student.name}</p>
    <p>The student's age is {student.age}</p>
    <p>Is the student married?: {student.isMarried? 'Yes' : 'No'}</p>
  </div>
  )
}

export default ReadSpecificStudent