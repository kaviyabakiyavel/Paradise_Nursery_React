import { useSelector } from 'react-redux';
import {
    selectCartItems
} from '../features/cart/cartSelectors';
import CartItem from '../components/CartItem';

const CartPage = () => {
    const items = useSelector(selectCartItems);
    return (
        <div style={{margin:"20px"}}>
            <h2>Your Cart</h2>
            <p>Total Items: {}</p>
            <div>
                {items.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default CartPage