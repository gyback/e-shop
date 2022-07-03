import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { AddRemoveButton, ButtonsContainer, CartItemContainer, ItemDetails, Name } from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const {addItemToCart, removeItemFromCart, removeItemTypeFromCart} = useContext(CartContext);
    
    const addItem = (() => {
        addItemToCart(cartItem);
    });

    const removeItem = (() => {
        quantity === 1
        ? (window.confirm("Do you really want to remove the this product?")) && removeItemFromCart(cartItem)
        : removeItemFromCart(cartItem)
    });

    const removeItemType = (() => {
        removeItemTypeFromCart(cartItem);
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