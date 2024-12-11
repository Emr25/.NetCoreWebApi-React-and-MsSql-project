import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { getAllProducts } from '../Redux/ProductSlice'
import Statistic from './Statistic'
import Indirim from './Indirim'


const ProductList = () => {

const dispatch = useDispatch()
const {products}=useSelector((store)=>store.product)

const navigate = useNavigate()

useEffect(()=>{
    dispatch(getAllProducts())
},[])

  return (
    <>
    
    <h1 className="text-5xl font-thin text-center my-8 text-black">Ürünlerimiz</h1>
    <hr/>
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
  
  <div className="container mx-auto p-4" id='ürünler'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
      {products.map((product, index) => (
        <div key={index} className="max-w-sm mx-auto rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105  ">
          <img className="w-full h-64 object-cover" src={product.imageUrl} alt={product.Name} />
          <div className="px-6 py-4 text-white">
            <div className="font-thin text-3xl mb-2 text-black">{product.name}</div>
            <div className="text-base mb-2 font-thin text-black">{product.description}</div>
            <div className="flex items-center mt-2">
              <span className="text-lg font-thin  text-black">Fiyat:</span>
              <span className="ml-2 text-2xl font-thin  text-black">{product.price}TL</span>
            </div>
            <div className="px-6 py-4 flex justify-center">
            <button className="bg-black  font-thin w-56 text-white px-4 py-2 rounded hover:bg-black transition-transform duration-300 hover:scale-105"
            onClick={()=>navigate(`product-detail/${product.id}`)}
            > İncele </button>
            
             </div>
            
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

<h1 className="text-5xl  font-thin text-center my-8 text-black">Kampanya</h1>
<hr/>
<Indirim/>
<h1 className="text-5xl font-thin text-center my-8 text-black">İstatistiklerimiz</h1>
<hr/>
<Statistic/>





  
    </>
   

  )
}

export default ProductList