import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { setCartVisibility } from '../../store/cart/cart.slice';
import { selectCartContent, selectCartVisibility } from '../../store/cart/cart.selector';

import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItemContainer, EmptyMessage } from './cart-dropdown.styles.jsx';

 

const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartContent = useSelector(selectCartContent);
    const cartVisibility = useSelector(selectCartVisibility);
    const navigate = useNavigate();
    

    const handleCheckoutClick = () => {
        dispatch(setCartVisibility(!cartVisibility));
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