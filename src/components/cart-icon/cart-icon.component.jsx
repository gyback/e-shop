import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


const CartIcon = () => {
    const {cartVisibility, setCartVisibility, cartCount} = useContext(CartContext)

    const toggleCartVisibility = () => {
        setCartVisibility(!cartVisibility);
    }

    return(
        <div className='cart-icon-container' onClick={toggleCartVisibility} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;