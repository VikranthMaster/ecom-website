import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Profile } from "./pages/profile";
import { NavBar } from "./pages/navbar";
import { Product } from "./pages/product";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<h1>Wrong page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
