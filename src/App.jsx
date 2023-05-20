import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/amazon-clone" element={<Home />} />
        <Route path="/amazon-clone/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
