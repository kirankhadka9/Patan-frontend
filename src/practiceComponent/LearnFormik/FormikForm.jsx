import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikTextArea from "./FormikTextArea";
import FormikSelect from "./FormikSelect";
import FormikRadio from "./FormikRadio";
import FormikCheckBox from "./FormikCheckBox";


const FormikForm = () => {
  //Each field has three things:
  //value
  //error
  //touch

  let initialValues = {
    firstName: "",
    lastName: "",
    description: "",
    country: "",
    gender: "",
    isMarried: false,
  };
  let validationSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    description: yup.string().required("Description Field is required"),
  });

  //validation will run only if,
  //onChange event is fired.
  //onblur (touched) event is fire
  //onSubmit event id fired.

  let onSubmit = (value, other) => {
    console.log(value);
  };

let countryOptions=[
  {
    label: "Select Country",
    value: "",
    disabled: true,
  },
  {
    label: "Nepal",
    value: "NEP",
  },
  {
    label: "India",
    value: "IND",
  },
  {
    label: "China",
    value: "CHN",
  },
  {
    label: "Japan",
    value: "JPN",
  },
  {
    label: "United States of America",
    value: "USA",
  },
]

  let genderOptions = [
    {
      label:"Male",
      value:"male"
    },             
    {
      label:"Female",
      value:"female"
    },
    {
      label:"Other",
      value:"other"
    },

  ]
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikInput
                name="firstName"
                label="First Name:"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("firstName", e.target.value);
                }}
                placeholder="Enter your First Name"
                required={true}
                // style={{backgroundColor:"yellow"}}
              ></FormikInput>

              <br />

              <FormikInput
                name="middleName"
                label="Middle Name:"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("middleName", e.target.value);
                }}
                placeholder="Enter your Middle Name"
                required={false}
                // style={{backgroundColor:"yellow"}}
              ></FormikInput>

              <br />

              <FormikInput
                name="lastName"
                label="Last Name:"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("lastName", e.target.value);
                }}
                placeholder="Enter your Last Name"
                required={true}
                // style={{backgroundColor:"yellow", color:"red"}}
              ></FormikInput>

              <br />

              <FormikTextArea 
                name="description"
                label="Description:"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("description", e.target.value);
                }}
                placeholder="Enter your description"
                required={true}
                // style={{backgroundColor:"yellow", color:"red"}}
              ></FormikTextArea>

              <br />

              <FormikSelect
                name="country"
                label="Country:"
                onChange={(e) => {
                  formik.setFieldValue("country", e.target.value);
                }}
                required={true}
                options={countryOptions}
              ></FormikSelect>

              <br />

              <FormikRadio
              name="gender"
              label="Gender:"
              onChange={(e)=>{
                formik.setFieldValue("gender", e.target.value)
              }}
              required={true}
              options={genderOptions}
              ></FormikRadio>

              <br />

              <FormikCheckBox
              name="isMarried"
              label="Is Married"
              onChange={(e)=>{
                formik.setFieldValue("isMarried", e.target.checked)
              }}></FormikCheckBox>

              <br />

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;







