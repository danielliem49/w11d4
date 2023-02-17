import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeCart } from '../../store/cart';

function CartItem({ item }) {
  
  const dispatch = useDispatch();

  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count < 1 ? dispatch(removeCart(item.id)) : count }
        />
        <button
          className="cart-item-button" onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="cart-item-button" onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          className="cart-item-button" onClick={() => dispatch(removeCart(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;