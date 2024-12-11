import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToBasket } from '../Redux/sepetSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const [click, setclick] = useState(false)

  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const getProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:5042/api/Product/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Ürün alınırken bir hata oluştu:', error);
    }
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  const sepeteEkle = () => {
    const payload = {
      id,
      Name: product.name,
      Price: product.price,
      ImageUrl : product.imageUrl,
      count,
    };
    dispatch(addToBasket(payload));
    setclick(true);
  };

  if (!product) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {click && (
          <div class="p-4 mb-4 text-2xl text-green-500 rounded-lg bg-green-50 dark:bg-green-500 dark:text-green-500" role="alert">  Sepete Eklendi </div>
        )}
        <img
          alt={product.name}
          className="w-96 h-96 object-cover object-center"
          src={product.imageUrl}
        />
        <div className="p-6">
          <h2 className="text-4xl font-bold text-gray-800">{product.name}</h2>
          
          <div className="mt-4">
            <span className="text-2xl font-thin text-gray-900">Fiyat : {product.price}TL</span>
          </div>
          <div className="mt-4">
            <span className="text-xl font-thin text-gray-900"> {product.description}</span>
          </div>
          <div className="flex items-center justify-between p-4 border-b">
            
            <div className="flex items-center">
              <button onClick={decrement} className="px-3 py-1 bg-gray-300 hover:bg-gray-400 focus:outline-none">
                -
              </button>
              <span className="px-4 py-1">{count}</span>
              <button onClick={increment} className="px-3 py-1 bg-gray-300 hover:bg-gray-400 focus:outline-none">
                +
              </button>
            </div>
          </div>
          <div className="flex">
            <button onClick={sepeteEkle} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Sepete Ekle
            </button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
