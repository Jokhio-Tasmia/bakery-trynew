import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";
import { Categories } from "./pages/Categories";
import { Dashboards } from "./pages/Dashboards";
import { Prev_orders } from "./pages/Prev_orders";
import { Incoming_orders } from "./pages/Incoming_orders";
import { Feedbacks } from "./pages/Feedbacks";
import { Navbar } from "./components/navbar";
import { AddCategory } from "./pages/AddCategory";
import { OrderDetails } from "./pages/OrderDetails";

function App() {
  return (
    <Router>
      
       <Navbar />
      
       <Routes>
        <Route path="/" element={<Dashboards />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/incoming-orders" element={<Incoming_orders />}></Route>
        <Route path="/feedbacks" element={<Feedbacks />}></Route>
        <Route path="/previous-orders" element={<Prev_orders />}></Route>
        <Route path="/add-category" element={<AddCategory/>}></Route>
        <Route path="/order-details/:orderId" element={<OrderDetails />} />

      </Routes>


      

      
    </Router>
  );
}

export default App;
