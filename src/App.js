import "./App.scss";
import { Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes></Routes>
      </Layout>
    </div>
  );
}

export default App;
