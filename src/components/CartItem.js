import { increaseQuantity, decreaseQuantity, removeItem } from '../features/cart/cartSlice';
import { useDispatch } from "react-redux";
import '../components/CartItem.css'
const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="cart-item">
      <div className="item-info">
        <img src={item.image} alt={item.name} width={80} />
        <div className="item-details">
          <h4>{item.name}</h4>
          <p>Unit Price: ${item.price.toFixed(2)}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
        </div>
        <div className='item-controls'>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quanity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem