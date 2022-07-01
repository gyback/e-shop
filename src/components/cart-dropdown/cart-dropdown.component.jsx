import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext, useEffect, useRef } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';

 

const CartDropdown = () => {
    const {cartContent, cartVisibility, setCartVisibility} = useContext(CartContext);
    const navigate = useNavigate();
    const toggleCartVisibility = () => {
        setCartVisibility(!cartVisibility);
    }

    const handleCheckoutClick = () => {
        toggleCartVisibility();
        navigate('/checkout');
    }

    const useOutsideClick = (ref) => {
        useEffect(() => {

            const handleOutsideClick = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    toggleCartVisibility();
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
    
    return (
        <div ref={dropdownRef} className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartContent && cartContent.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick ={handleCheckoutClick} >go to checkout</Button>
        </div>
    );
}

export default CartDropdown;