import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';


const CartDropdown = () => {
    const {cartContent, cartVisibility, setCartVisibility} = useContext(CartContext);
    const navigate = useNavigate();
    const toggleCartVisibility = () => {
        setCartVisibility(!cartVisibility);
        navigate('/checkout');
    }
    
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartContent && cartContent.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick ={toggleCartVisibility} >go to checkout</Button>
        </div>
    );
}

export default CartDropdown;