import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Incoming_orders = () => {
  const orders = [
    { id: "123", date: "2025-06-05", user: "Tasmia" },
    { id: "456", date: "2025-05-05", user: "Ahad" },
    { id: "567", date: "2025-06-05", user: "koebhi" },
    
  ];
  const nav=useNavigate()
  return (
    < div >
     <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mt-50">
      <h2 className='text-2xl font-bold bg-sky-200 m-3 text-center '>Incoming orders</h2>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='py-2 px-4 border'>OrderID</th>
            <th className='py-2 px-4 border'>User</th>
            <th className='py-2 px-4 border'> Date</th>
            <th className='py-2 px-4 border'>view details </th>
          </tr>
          </thead>
          <tbody>
            {orders.map((ord)=>
             <tr key={ord.id}>
              <td className='py-2 px-4 border text-center'>{ord.id}</td>
              <td className='py-2 px-4 border text-center'>{ord.user}</td>
              <td className='py-2 px-4 border text-center'>{ord.date}</td>
              <td className='py-2 px-4 border text-center'>
                <button className='bg-gray-100 rounded-lg py-2 px-4' onClick={()=>nav("/order-details/:orderId")}>View</button></td>
            </tr>
            
            )}
           
          </tbody>
      </table>
      <div className='flex justify-center my-3'>
      <button className="bg-gray-400 rounded-lg py-2 px-4" onClick={()=>nav("/")}>Back</button>
      </div>
       

    </div>

    </div>
   
  )
}

/*// Incoming_orders.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export const Incoming_orders = () => {
  const navigate = useNavigate();

  const orders = [
    { id: "ORD101", date: "2025-06-05", user: "Alice" },
    { id: "ORD102", date: "2025-06-05", user: "Bob" },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Incoming Orders</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Order ID</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">User</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="py-2 px-4 border text-center">{order.id}</td>
              <td className="py-2 px-4 border text-center">{order.date}</td>
              <td className="py-2 px-4 border text-center">{order.user}</td>
              <td className="py-2 px-4 border text-center">
                <button
                  onClick={() => navigate(`/order-details/${order.id}`)}
                  className="bg-blue-400 text-white px-4 py-2 rounded-lg"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

*/