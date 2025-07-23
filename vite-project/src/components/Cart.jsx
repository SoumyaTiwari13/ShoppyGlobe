import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function Cart() {
  const items = useSelector(state => state.cart.cartItems);

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? <p>Cart is empty</p> : items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
