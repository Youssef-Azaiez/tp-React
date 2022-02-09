import { useParams } from "react-router-dom";
import "./index.css";

function Seller() {
  let params = useParams();

  return (
    <div className="seller page">
      <h1>Seller ECOM {params.slug}</h1>
    </div>
  );
}

export default Seller;
