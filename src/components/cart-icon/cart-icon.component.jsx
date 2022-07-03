import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';


const CartIcon = () => {
    const {cartVisibility, setCartVisibility, cartCount} = useContext(CartContext)

    const toggleCartVisibility = () => {
        setCartVisibility(!cartVisibility);
    }

    return(
        <CartIconContainer className='cart-icon-container' onClick={toggleCartVisibility} >
            <ShoppingIcon className='shopping-icon' />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;