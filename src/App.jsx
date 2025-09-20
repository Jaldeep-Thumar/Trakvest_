import {  Route, Routes } from "react-router-dom"
import Form from "./FormHandle/Form.jsx"
import Product from "./Product.jsx"
import AppInterface from "./Interfaces/AppInterface.jsx"
import StockSearch from './components/StockSearch';

function App() {
  

  return (
    <>
    <Routes>

     <Route path='/' element={<StockSearch/>}/> 
     <Route  path='/signup' element={<Form/>}/>
     <Route path='/interface' element={<AppInterface/>}/>
      </Routes> 
    
    </>
  )
}

export default App
