import "./App.scss";
import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Headphones from "./Pages/Headphones";
import EarPhones from "./Pages/EarPhones";
import Speakers from "./Pages/Speakers";
import ProductDetail from "./Pages/ProductDetail";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useSelector } from "react-redux";

function App() {
  const tawkMessengerRef = useRef();
  const authCtxLoginState = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {!authCtxLoginState && <Route path="/login" element={<Login />} />}
          {!authCtxLoginState && (
            <Route path="/register" element={<Register />} />
          )}
          <Route path="/category/headphones" element={<Headphones />} />
          <Route path="/category/earphones" element={<EarPhones />} />
          <Route path="/category/speakers" element={<Speakers />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Layout>
      <TawkMessengerReact
        propertyId="62f887df54f06e12d88e8553"
        widgetId="1gadd5hjd"
        ref={tawkMessengerRef}
        // onLoad={onLoad}
      />
    </div>
  );
}

export default App;
