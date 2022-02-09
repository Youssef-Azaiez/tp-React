import { Link } from "react-router-dom";
function ProductCard(props) {
  return (
    <Link to={{ pathname: `/courses${props.product.id}` }}>
      <div>
        <h4>{props.product.name}</h4>
        <span>{props.product.price}</span>
        <p>{props.product.description}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
