import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux/es';

import { selectCartCount, selectCartVisibility } from '../../store/cart/cart.selector';
import { setCartVisibility } from '../../store/cart/cart.slice';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';


const CartIcon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const cartVisibility = useSelector(selectCartVisibility);
   
    const toggleVisibility = () => dispatch(setCartVisibility(!cartVisibility));
    


    const useOutsideClick = (ref) => {
        useEffect(() => {

            
            const handleOutsideClick = (event) => {
                    
      
                if (cartVisibility && ref.current && !ref.current.contains(event.target)) {
                    dispatch(setCartVisibility(false));
                }
            }

            

            document.addEventListener("mousedown", handleOutsideClick);
            return () => {
                document.removeEventListener("mousedown", handleOutsideClick);
            }
        }, [ref, cartVisibility])
    }

    const dropdownRef = useRef(null);
    
    useOutsideClick(dropdownRef);
    

    return(
        <div ref={dropdownRef} >
            <CartIconContainer className='cart-icon-container' onClick={toggleVisibility} >
                <ShoppingIcon className='shopping-icon' />
                <ItemCount className='item-count'>{cartCount}</ItemCount>
            </CartIconContainer>
            {cartVisibility && <CartDropdown /> }
        </div>
    )
}

export default CartIcon;