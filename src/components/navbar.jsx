import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    
      <nav className="fixed top-0 left-0 w-full h-16 bg-sky-200 shadow-md z-50 flex items-center px-4">

        <div className="flex items-center justify-between w-full" >
          
            <Link to="/">Dashboard</Link>
          
         
            <Link to="/products">Products</Link>
          
            <Link to="/incoming-orders">Incoming orders</Link>
          
            <Link to="/previous-orders" className="hover:text-gray-300">
              Previous Orders
            </Link>
         
            <Link to="/feedbacks" className="hover:text-gray-300">
              Feedbacks
            </Link>
          
            <Link to="/categories" className="hover:text-gray-300">
              Categories
            </Link>
         
        </div>
      </nav>
   
  );
};
