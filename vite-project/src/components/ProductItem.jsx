import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <p>Price: ${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}
