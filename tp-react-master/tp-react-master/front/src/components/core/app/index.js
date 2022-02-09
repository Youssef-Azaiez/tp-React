import { Routes, Route } from "react-router-dom";
import Home from "../../../pages/home";
import Account from "../../../pages/account";
import Cart from "../../../pages/cart";
import DashboardPro from "../../../pages/dashbord-pro";
import Login from "../../../pages/login";
import Product from "../../../pages/product";
import Seller from "../../../pages/seller";
import "./index.css";

function App() {
  return (
    <div className="app">
      <h1>Ecom | Website</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mon-compte" element={<Account />} />
        <Route path="/panier" element={<Cart />} />
        <Route path="/dashboard" element={<DashboardPro />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/produit/:slug" element={<Product />} />
        <Route path="/vendeur/:slug" element={<Seller />} />
      </Routes>
    </div>
  );
}

export default App;
