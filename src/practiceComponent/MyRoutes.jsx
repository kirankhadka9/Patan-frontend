import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProduct from './product/CreateProduct'
import ReadAllProduct from './product/ReadAllProduct'
import CreateStudent from './student/CreateStudent'
import ReadAllStudent from './student/ReadAllStudent'
import ReadSpecificProduct from './product/ReadSpecificProduct'

const MyRoutes = () => {
  return (
    <div>
<Routes>
    <Route path="/products/create" element={<CreateProduct></CreateProduct>}>

    </Route>
    <Route path="/products" element={<ReadAllProduct></ReadAllProduct>}>

</Route>
<Route path="/products/:id" element={<ReadSpecificProduct></ReadSpecificProduct>}>

</Route>
<Route path="/students/create" element={<CreateStudent></CreateStudent>}>

</Route>
<Route path="/students" element={<ReadAllStudent></ReadAllStudent>}>

</Route>
<Route path="/students/:id" element={<ReadAllStudent></ReadAllStudent>}>

</Route>
<Route path="/" element={<div> This is Home page</div>}>

</Route>
<Route path="/*" element={<h1> 404: Page Not Found</h1>}>

</Route>



</Routes>


    </div>
  )
}

export default MyRoutes