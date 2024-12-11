import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://marketplace.canva.com/EAFYmiNojfQ/1/0/1600w/canva-siyah-beyaz%2C-sade-ve-estetik%2C-marka-ma-harf-logo-9_epHMZeZEE.jpg" alt="Logo" className="h-20 w-28 mr-2" />
          <Link to="/" className="text-2xl font-bold text-gray-500 font-poppins">Akıncı Giyim</Link>
        </div>
        <nav className="space-x-4">
          <a href='#ürünler' className="text-gray-600 hover:text-black">Ürünler</a>
          <a href='#indirim' className="text-gray-600 hover:text-black">Kampanyalar</a>
          <a href='#istatistik' className="text-gray-600 hover:text-black">İstatistiklerimiz</a>
        </nav>
        <div className="space-x-4 flex items-center">
         <Link to="/sepet" className="cursor-pointer hover:text-gray-400"> <FaShoppingCart className="h-10 w-10" /> </Link>
         
           </div>
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
            <svg className="w-6 h-6 text-gray-600 hover:text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path fillRule="evenodd" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden mobile-menu">
        <ul className="">
          <li><Link to="/shop" className="block text-sm px-2 py-4 text-gray-600 hover:bg-blue-600 hover:text-white">Shop</Link></li>
          <li><Link to="/about" className="block text-sm px-2 py-4 text-gray-600 hover:bg-blue-600 hover:text-white">About</Link></li>
          <li><Link to="/contact" className="block text-sm px-2 py-4 text-gray-600 hover:bg-blue-600 hover:text-white">Contact</Link></li>
          <li><Link to="/login" className="block text-sm px-2 py-4 text-gray-600 hover:bg-blue-600 hover:text-white">Login</Link></li>
          <li><Link to="/signup" className="block text-sm px-2 py-4 text-gray-600 hover:bg-blue-600 hover:text-white">Sign Up</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
