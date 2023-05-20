import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import OverView from "./pages/OverView";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/amazon-clone" element={<Home />} />
        <Route path="/amazon-clone/cart" element={<Cart />} />
        <Route path="/amazon-clone/overview/:id" element={<OverView />} />
        <Route path="*" element={<Navigate to="/amazon-clone/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
