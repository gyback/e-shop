import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addItemToCart, removeItemFromCart, removeItemTypeFromCart} from '../../store/cart/cart.slice'
import { selectCartContent } from '../../store/cart/cart.selector';
import { AddRemoveButton, ButtonsContainer, CartItemContainer, ItemDetails, Name } from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();

    const {name, imageUrl, price, quantity} = cartItem;
    const cartContent = useSelector(selectCartContent);
    
    const [removeLastItemWarningBool, setRemoveLastItemWarningBool] = useState(false);

    const addItem = (() => {
        dispatch(addItemToCart(cartItem, cartContent));
    });

    const removeItem = (() => {
        quantity === 1
        ? setRemoveLastItemWarningBool(true)
        : dispatch(removeItemFromCart(cartItem, cartContent))
    });

    const removeItemType = (() => {
        dispatch(removeItemTypeFromCart(cartItem, cartContent));
    });

    return (
        <CartItemContainer >
            <img src={imageUrl} alt={name}/>
            <ItemDetails>
                <Name >{name}</Name>
                <span className='price'>{`${quantity} x ${price}`}</span>
            </ItemDetails>
            {removeLastItemWarningBool &&
                <div>
                    Do you really want to remove this product?
                    <button onClick={removeItemType}>Yes</button>
                    <button onClick={()=> setRemoveLastItemWarningBool(false)}>No</button>
                </div>
            }
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