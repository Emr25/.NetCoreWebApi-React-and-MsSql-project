import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 
import  { calculateSepet, completeCart, removeFromCart } from '../Redux/sepetSlice';


const SepetCard = () => {

const {products,totalAmount} = useSelector((store)=>store.basket);
const dispatch = useDispatch();
const [order, setorder] = useState(false)



const handleDelete = (id)=>{
    dispatch(removeFromCart({id}))
    dispatch(calculateSepet())
    
}

useEffect(()=>{
    dispatch(calculateSepet())
},[])

const complete =()=>{
  dispatch(completeCart())
  setorder(true)
}



 
   
    return(
      <div className="container mx-auto p-4"> 
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Sepetim</h1>
      {order && (
          <div class="p-4 mb-4 text-2xl text-green-500 rounded-lg bg-green-50 dark:bg-green-500 dark:text-green-500" role="alert">Siparişiniz onaylandı </div>
        )}

       {products && products.length > 0 ? ( products.map((product, index) =>
        (
           <div key={index} className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg mb-4">
             <img src={product.ImageUrl} alt={product.name} className="w-20 h-20 object-cover rounded" />
              <div className="ml-4 flex-1">
                 <h2 className="text-xl font-bold text-gray-800">{product.Name}</h2> 
                 <p className="text-gray-600">${product.Price}</p>
                  <p className="text-gray-600">Tutar : {product.count*product.Price}</p>
                   </div>
                    <div className="flex items-center">
                       <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" > Remove </button>
                        </div> 
                        </div> 
                        )) )
                         : ( <p className="text-gray-600">Sepetinizde ürün yok.</p> )}
                          <div className="flex justify-between items-center mt-6">
                             <h2 className="text-2xl font-bold text-gray-800">Toplam: ${totalAmount}</h2>
                              <button onClick={complete} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" > Sipariş Tamamla </button>
                              
                           </div>
                          
                          
                          
                           </div>
           
                  
    
                        )
  }

  
  
  


export default SepetCard