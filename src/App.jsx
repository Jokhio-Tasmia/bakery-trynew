import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";
import { Categories } from "./pages/Categories";
import { Dashboards } from "./pages/Dashboards";
import { Prev_orders } from "./pages/Prev_orders";
import { Incoming_orders } from "./pages/Incoming_orders";
import { Feedbacks } from "./pages/Feedbacks";
import { Navbar } from "./components/navbar";



function App() {
 

  return (
  
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboards/>}></Route>
        <Route path="/Categories" element={<Categories />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Incoming_orders" element={<Incoming_orders />}></Route>
        <Route path="/Feedbacks" element={<Feedbacks />}></Route>
        <Route path="/Prev_orders" element={<Prev_orders />}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
