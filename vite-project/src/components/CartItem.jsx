// CartItem.jsx - Represents a single item in the cart

import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{item.title}</h4>
      <p>${item.price} x {item.quantity}</p>
      <input
        type="number"
        value={item.quantity}
        onChange={e => dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))}
      />
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
}
