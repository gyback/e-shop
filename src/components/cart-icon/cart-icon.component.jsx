import { useContext, useEffect, useRef } from 'react';
import { CartContext } from '../../context/cart.context';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';


const CartIcon = () => {
    const { cartVisibility, toggleCartVisibility, hideCart, cartCount} = useContext(CartContext)

    const useOutsideClick = (ref) => {
        useEffect(() => {

            const handleOutsideClick = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    hideCart();
                }
            }

            document.addEventListener("mousedown", handleOutsideClick);
            return () => {
                document.removeEventListener("mousedown", handleOutsideClick);
            }
        }, [ref])
    }

    const dropdownRef = useRef(null);
    useOutsideClick(dropdownRef);
    

    return(
        <div ref={dropdownRef}>
            <CartIconContainer className='cart-icon-container' onClick={toggleCartVisibility} >
                <ShoppingIcon className='shopping-icon' />
                <ItemCount className='item-count'>{cartCount}</ItemCount>
            </CartIconContainer>
            {cartVisibility && <CartDropdown /> }
        </div>
    )
}

export default CartIcon;