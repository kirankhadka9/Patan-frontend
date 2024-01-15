import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ReadAllProduct from "./product/ReadAllProduct";
import ReadSpecificProduct from "./product/ReadSpecificProduct";
import CreateProduct from "./product/CreateProduct";
import ReadAllStudent from "./student/ReadAllStudent";
import CreateStudent from "./student/CreateStudent";
import ReactLink from "./ReactLink";
import ReadSpecificStudent from "./student/ReadSpecificStudent";
import UpdateProduct from "./product/UpdateProduct";
import UpdateStudent from "./student/UpdateStudent";
import AdminRegister from "./WebUser/AdminRegister";
import AdminVerify from "./WebUser/AdminVerify.jsx";
import AdminLogin from "./WebUser/AdminLogin.jsx";
import AdminProfile from "./WebUser/AdminProfile.jsx";
import AdminLogout from "./WebUser/AdminLogout.jsx";
import AdminProfileUpdate from "./WebUser/AdminProfileUpdate.jsx";
import UpdatePassword from "./WebUser/UpdatePassword.jsx";
import AdminForgotPassword from "./WebUser/AdminForgotPassword.jsx";
import AdminResetPassword from "./WebUser/AdminResetPassword.jsx";
import ReadAllUsers from "./WebUser/ReadAllUsers.jsx";
import ReadSpecificUser from "./WebUser/ReadSpecificUser.jsx";
import UpdateSpecificUser from "./WebUser/UpdateSpecificUser.jsx";

const NestingRoute = () => {
  return (
    <div>
      <Routes>
        
        <Route
          path="/"
          element={
            <div>
              <ReactLink></ReactLink>
              <Outlet></Outlet>
              {/* <div>This is Footer</div> */}
            </div>
          }
        >
          <Route
          path="reset-password"
          element={<AdminResetPassword></AdminResetPassword>}></Route>

          <Route index element={<div>Home Page</div>}></Route>
<Route path="verify-email" element={<AdminVerify></AdminVerify>}></Route>
          <Route
            path="products"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route index element={<ReadAllProduct></ReadAllProduct>}></Route>
            <Route
              path=":id"
              element={<ReadSpecificProduct></ReadSpecificProduct>}
            ></Route>
            <Route
              path="create"
              element={<CreateProduct></CreateProduct>}
            ></Route>

            <Route
              path="update"
              element={
                <div>
                  <Outlet></Outlet>
                </div>
              }
            >
              <Route
                path=":id"
                element={<UpdateProduct></UpdateProduct>}
              ></Route>
            </Route>
          </Route>

          <Route
            path="students"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route index element={<ReadAllStudent></ReadAllStudent>}></Route>
            <Route
              path=":id"
              element={<ReadSpecificStudent></ReadSpecificStudent>}
            ></Route>
            <Route
              path="create"
              element={<CreateStudent></CreateStudent>}
            ></Route>

            <Route
              path="update"
              element={
                <div>
                  <Outlet></Outlet>
                </div>
              }
            >
              <Route
                path=":id"
                element={<UpdateStudent></UpdateStudent>}
              ></Route>
            </Route>
          </Route>

<Route
          path="admin"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
      >
          <Route index element={<div>This is Admin DashBoard</div>}></Route>

       <Route
       path="profile-update"
       element={<AdminProfileUpdate></AdminProfileUpdate>}
       >
        </Route>     


      <Route
      path="logout" element={<AdminLogout></AdminLogout>}
      ></Route>


    <Route
    path="my-profile"
    element={<AdminProfile></AdminProfile>}
    ></Route>
    <Route
      path="login"
      element={<AdminLogin></AdminLogin>}
      ></Route>

  
   <Route
    path="verify-email"
    element={<AdminVerify></AdminVerify>}
     ></Route>


      <Route
      path="register"
      element={<AdminRegister></AdminRegister>}
      ></Route>


        <Route
          path="logout"
          element={<AdminLogout></AdminLogout>}>

          </Route>     

          <Route
          path="update-password"
          element={<UpdatePassword></UpdatePassword>}
          > </Route>

          <Route
          path="read-all-users"
          element={<ReadAllUsers></ReadAllUsers>}
          ></Route>

          <Route
          path="forgot-password"
          element={<AdminForgotPassword></AdminForgotPassword>}></Route> 

          <Route
          path="read-specific-users"
          element={<div><Outlet></Outlet></div>}
          ></Route>
            <Route
            path=":id"
            element={<ReadSpecificUser></ReadSpecificUser>}></Route>
             


          <Route
          path="update"
          element={<div><Outlet></Outlet></div>}
          >
          
            <Route
            path=":id"
            element={<UpdateSpecificUser></UpdateSpecificUser>}></Route>
            </Route> 
      

</Route>
     
          


        </Route>
        
      </Routes>
    </div>
  );
};

export default NestingRoute;
