import { useSelector } from 'react-redux';
import {
    selectCartItems
} from '../features/cart/cartSelectors';
import CartItem from '../components/CartItem';
import { useNavigate } from "react-router-dom";
import './CartPage.css';

const CartPage = () => {
    const items = useSelector(selectCartItems);
    const navigate = useNavigate();

    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <div style={{ margin: "20px" }}>
            <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px', marginBottom: '20px' }}>Total Cart Amount: ${totalAmount.toFixed(2)}</p>
            <div style={{ justifyContent: "center", display: "grid", alignContent: "center" }}>
                {items.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            {/* Buttons Section */}
            <div className="cart-buttons">
                <button className="continue-btn" onClick={() => navigate("/products")}>
                    Continue Shopping
                </button>
                <button className="checkout-btn" onClick={() => navigate("/checkout")}>
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default CartPage