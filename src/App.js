import "./App.css";
import Image from "./practiceComponent/LearnUseStateHook1/Image.jsx";
import Age from "./practiceComponent/Age.jsx";
import { College } from "./practiceComponent/College.jsx";
import Details from "./practiceComponent/Details.jsx";
import { Details1 } from "./practiceComponent/Details1.jsx";
import EffectOnDifferentData from "./practiceComponent/EffectOnDifferentData.jsx";
import Infopass from "./practiceComponent/Infopass.jsx";
import { LearnTernary } from "./practiceComponent/LearnTernary.jsx";
import { Location } from "./practiceComponent/Location.jsx";
import Images from "./practiceComponent/Images.jsx";
import LearnMap1 from "./practiceComponent/LearnMap1.jsx";
import { LearnMap2 } from "./practiceComponent/LearnMap2.jsx";
import ButtonClick from "./practiceComponent/ButtonClick.jsx";
import { LearnUseStateHook1 } from "./practiceComponent/LearnUseStateHook1/LearnUseStateHook1.jsx";
import LearnUseState2 from "./practiceComponent/LearnUseStateHook1/LearnUseState2.jsx";
import LearnCleanupFunction from "./practiceComponent/LearnUseStateHook1/LearnCleanupFunction.jsx";
import MyLinks from "./practiceComponent/ReactLink.jsx";
import { createContext, useState } from "react";
import MyRoutes from "./practiceComponent/MyRoutes.jsx";
import Form1 from "./practiceComponent/Form/Form1.jsx";
import Form2 from "./practiceComponent/Form/Form2.jsx";
import ReactLink from "./practiceComponent/ReactLink.jsx";
import NestingRoute from "./practiceComponent/NestingRoute.jsx";
import Form3 from "./practiceComponent/Form/Form3.jsx";
import LearnUseRefHook from "./practiceComponent/LearnUserRefHook/LearnUseRefHook.jsx";
import AddToLocalStorage from "./practiceComponent/LearnLocalStorage/AddToLocalStorage.jsx";
import GetLocalStorageData from "./practiceComponent/LearnLocalStorage/GetLocalStorageData.jsx";
import RemoveLocallStorageData from "./practiceComponent/LearnLocalStorage/RemoveLocallStorageData.jsx";
import AddDataToSessioStorage from "./practiceComponent/learnSessionStorage/AddDataToSessioStorage.jsx";
import GetDataOfSessionStorage from "./practiceComponent/learnSessionStorage/GetDataOfSessionStorage.jsx";
import FormikForm from "./practiceComponent/LearnFormik/FormikForm.jsx";
import FormikTutorial from "./practiceComponent/LearnFormik/FormikTutorial.jsx";
import Parent from "./practiceComponent/LearnPropDrilling/Parent.jsx";



export let Context1=createContext();
export let Context2=createContext();

function App() {
 /*  let name = <p> i am writing a paragraph</p>; */
  //let age = 28; 
  //let b = `${1 + 1}`;
//  console.log(age);
  let [show,setshow]=useState(true)
  let [name,setName]=useState("kiran");
  let [age,setAge]= useState("25")

  let [address,setAddress]=useState("sankhamul");
  return (
    // we can implement javascript operation inside tag use{}
    // react can store tag
    // there must be only one wrapper in return
    <div>
      {/* <p style={{ color: "green", backgroundColor: "red" }}>
        My name is Akash Nepal ok hello
      </p>
      <div className="success">Our coach is Nitin sir</div>
      <h1 style={{ color: "green" }}> This is family </h1> s{name}
      {b}
      <a href="https://www.google.com/" target=" a">
        Google
      </a>
      <img src="./react pr.jpeg"></img> */}
      {/* <Age></Age>
      <Details name="Akash" address="Gagal" age ={23}></Details>
      <div className="success">This is a success message.</div>
      <div className="error">This is a error message.</div>
      <div className="info">This is a info message.</div>
      <div className="warning">This is a warning message.</div> */}
      {/* <Details1 name="Akash" age={23} address="kapan"></Details1>
      <College name="PMC" address="Patan"></College> */}
      {/* <LearnTernary></LearnTernary> */}
      {/* <EffectOnDifferentData></EffectOnDifferentData> */}
      {/* <Infopass name="Akash" age={23}></Infopass>
      <Images></Images> */}
     {/* <LearnMap1></LearnMap1> */}
     {/* <LearnMap2></LearnMap2> */}
     {/* <ButtonClick> </ButtonClick> */}
     {/* <LearnUseStateHook1></LearnUseStateHook1> */}
     {/* <LearnUseState2></LearnUseState2> */}
     {/* <Image></Image> */}
     {/* <LearnUseStateHook1>

     </LearnUseStateHook1> */}
    {/* { show ? <LearnCleanupFunction>
      
      </LearnCleanupFunction> :null} */}
      {/* <MyLinks></MyLinks>
<MyRoutes></MyRoutes> */}
{/* <Form1></Form1> */}
{/* <Form2></Form2> */}
{/* <NestingRoute></NestingRoute> */}
{/* <Form3></Form3> */}
{/* <LearnUseRefHook></LearnUseRefHook> */}
{/* <AddToLocalStorage></AddToLocalStorage> */}
{/* <GetLocalStorageData></GetLocalStorageData> */}
{/* <RemoveLocallStorageData></RemoveLocallStorageData> */}
{/* <AddDataToSessioStorage></AddDataToSessioStorage> */}
{/* <GetDataOfSessionStorage></GetDataOfSessionStorage> */}
{/* <FormikForm></FormikForm> */}
{/* <FormikTutorial></FormikTutorial> */}
{/* <Parent></Parent> */}
      {/* <Location country="Nepal" province={3} district="kathmandu" exactLocation="bibek tole"></Location>  */}
      <Context1.Provider value={{name:name,age:age,setName:setName}}>
      <Context2.Provider value={{address:address,setAddress:setAddress}}>
        <Parent></Parent>
        </Context2.Provider>
      </Context1.Provider>
      
      </div>
  );
}

export default App;
