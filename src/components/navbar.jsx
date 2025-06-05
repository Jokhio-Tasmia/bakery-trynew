import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/incoming-orders">Incoming orders</Link>
          </li>
          <li>
            <Link to="/previous-orders" className="hover:text-gray-300">
              Previous Orders
            </Link>
          </li>
          <li>
            <Link to="/feedbacks" className="hover:text-gray-300">
              Feedbacks
            </Link>
          </li>
          <li>
            <Link to="/categories" className="hover:text-gray-300">
              Categories
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
