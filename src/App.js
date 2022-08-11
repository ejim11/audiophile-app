import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Headphones from "./Pages/Headphones";
import EarPhones from "./Pages/EarPhones";
import Speakers from "./Pages/Speakers";
import ProductDetail from "./Pages/ProductDetail";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category/headphones" element={<Headphones />} />
          <Route path="/category/earphones" element={<EarPhones />} />
          <Route path="/category/speakers" element={<Speakers />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
