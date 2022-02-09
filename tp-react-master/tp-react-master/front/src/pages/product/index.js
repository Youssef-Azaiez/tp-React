import { useParams } from "react-router-dom";
import "./index.css";

function Product() {
  let params = useParams();

  return (
    <div className="product page">
      <h1>Product ECOM {params.slug} </h1>
    </div>
  );
}

export default Product;
