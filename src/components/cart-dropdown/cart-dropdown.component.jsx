import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItemContainer, EmptyMessage } from './cart-dropdown.styles.jsx';

 

const CartDropdown = () => {
    const {cartContent, toggleCartVisibility} = useContext(CartContext);
    const navigate = useNavigate();
    

    const handleCheckoutClick = () => {
        toggleCartVisibility();
        navigate('/checkout');
    }

    
    
    return (
        <CartDropdownContainer  >
            <CartItemContainer >
                {(cartContent && cartContent.length) ? cartContent.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))
                :<EmptyMessage>The cart is empty</EmptyMessage>}
            </CartItemContainer>
            <Button onClick ={handleCheckoutClick} >go to checkout</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;