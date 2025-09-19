import {  Route, Routes } from "react-router-dom"
import Form from "./FormHandle/Form.jsx"
import Product from "./Product.jsx"
import AppInterface from "./Interfaces/AppInterface.jsx"
import Home from "./Home.jsx"
function App() {
  

  return (
    <>
    {/* <Routes>

     <Route path='/' element={<Product/>}/> 
     <Route  path='/signup' element={<Form/>}/>
     <Route path='/interface' element={<AppInterface/>}/>
      </Routes> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
