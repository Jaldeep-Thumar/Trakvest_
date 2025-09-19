import {  Route, Routes } from "react-router-dom"
import Form from "./FormHandle/Form.jsx"
import Product from "./Product.jsx"
import AppInterface from "./Interfaces/AppInterface.jsx"
function App() {
  

  return (
    <>
    <Routes>

     <Route path='/' element={<Product/>}/> 
     <Route  path='/signup' element={<Form/>}/>
     <Route path='/interface' element={<AppInterface/>}/>
      </Routes>
    </>
  )
}

export default App
