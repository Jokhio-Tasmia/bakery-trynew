import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to="/Products">Products</Link>
            </li>
            <li>
                <Link to="/Incoming_orders">Incoming orders</Link>
            </li>
            <li>
            <Link to="/Prev_orders" className="hover:text-gray-300">Previous Orders</Link>
          </li>
          <li>
            <Link to="/Feedbacks" className="hover:text-gray-300">Feedbacks</Link>
          </li>
          <li>
            <Link to="/Categories" className="hover:text-gray-300">Categories</Link>
          </li>
         


        </ul>

    </nav>
    
  )
}
