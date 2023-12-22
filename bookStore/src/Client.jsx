import Header from "./layouts/Header";
import Home from "./pages/Home/Home";
import Footer from "./layouts/Footer";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product/Product";

 function Client(){
    return(
        <div className="page-holder">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuahang" element={<Product />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <Footer />
        </div>
    );
 }
 export default Client;