import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Headphones from "./Pages/Headphones";
import EarPhones from "./Pages/EarPhones";
import Speakers from "./Pages/Speakers";
import Category from "./Pages/Category";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/ear phones" element={<EarPhones />} />
          <Route path="/" element={<Speakers />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/product/:productId" element={<Products />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
