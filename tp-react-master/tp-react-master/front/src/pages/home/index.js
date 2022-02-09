import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../../components/templates/productCard";
import "./index.css";

function Home() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/products/all`
      );
      if (res && res.data) {
        setProducts(res.data);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="home page">
      <h1>HOME ECOM</h1>
      <div className="home__products">
        {products &&
          products.length &&
          products.abilities.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Home;
