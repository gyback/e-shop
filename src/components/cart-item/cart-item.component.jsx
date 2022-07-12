import { useSelector, useDispatch } from 'react-redux';

import { addItemToCart, removeItemFromCart, removeItemTypeFromCart} from '../../store/cart/cart.slice'
import { selectCartContent } from '../../store/cart/cart.selector';
import { AddRemoveButton, ButtonsContainer, CartItemContainer, ItemDetails, Name } from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();

    const {name, imageUrl, price, quantity} = cartItem;
    const cartContent = useSelector(selectCartContent);
    
    const addItem = (() => {
        dispatch(addItemToCart(cartItem, cartContent));
    });

    const removeItem = (() => {
        quantity === 1
        ? (window.confirm("Do you really want to remove the this product?")) && dispatch(removeItemFromCart(cartItem, cartContent))
        : dispatch(removeItemFromCart(cartItem))
    });

    const removeItemType = (() => {
        dispatch(removeItemTypeFromCart(cartItem, cartContent));
    })

    return (
        <CartItemContainer >
            <img src={imageUrl} alt={name}/>
            <ItemDetails>
                <Name >{name}</Name>
                <span className='price'>{`${quantity} x ${price}`}</span>
            </ItemDetails>
            <ButtonsContainer >
                <span className='arrow clear' onClick={removeItemType}>&#10005;</span>
                <AddRemoveButton >
                    <span className='arrow' onClick={removeItem} >-</span>
                    <span className='arrow' onClick={addItem}>+</span>
                </AddRemoveButton>
            </ButtonsContainer>
        </CartItemContainer>
    );
}

export default CartItem;