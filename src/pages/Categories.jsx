import { useState } from "react";
import React from "react";
import { AddCategory } from "./AddCategory";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Cakes" },
    { id: 2, name: "Pastries" },
    { id: 3, name: "Breads" },
    { id: 4, name: "Cookies" },
  ]);
    const nav=useNavigate();
  
  return (
    <>
    
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 m-50">
        <div className="bg-gray-200 flex justify-between items-center p-4 m-4 rounded-lg ">
          <h2 className="text-2xl font-bold">All categories</h2>
          <button className=" font-bold bg-sky-200  rounded-lg py-2 px-4 hover:bg-sky-300 " onClick={()=>nav("/add-category")}> + add new category</button>
        </div>

        <table className="w-full border-collapse"> 
          <thead>
            <tr >
              <th className="py-2 px-4 border bg-gray-100" >#id</th>
              <th className="py-2 px-4 border bg-gray-100">Category</th>
              <th className="py-2 px-4 border bg-gray-100">Action</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id}>
                <td className="text-center border">{index + 1}</td>
                <td className="text-center border">{category.name}</td>
                <td className="text-center border">
                  <button className="bg-sky-200 py-2 px-4 m-4 rounded-lg">Edit</button>
                  <button className="bg-sky-200 py-2 px-4 m-4 rounded-lg">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="bg-sky-400 py-2 px-4 rounded-lg m-4 w-20"onClick={()=>nav("/")}>Back </button>
      </div>
      
      
    </>
  );
};

