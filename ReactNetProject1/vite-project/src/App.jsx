

import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ProductDetails from './Components/ProductDetails'
import ProductList from './Components/ProductList'
import SepetCard from "./Components/SepetCard"
import {Routes,Route} from "react-router-dom"


function App() {
 

  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<ProductList/>} />
      <Route path="/sepet" element={<SepetCard/>} />
      <Route path="/product-detail/:id" element={<ProductDetails/>} />
    </Routes>
     
     <Footer/>
    </>
  )
}

export default App
