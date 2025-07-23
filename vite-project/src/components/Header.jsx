import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartCount = useSelector(state => state.cart.cartItems.length);
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}
