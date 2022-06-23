import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './cart-item.styles.scss';

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
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{`${quantity} x ${price}`}</span>
            </div>
            <div className='buttons-container'>
                <span className='arrow clear' onClick={removeItemType}>&#10005;</span>
                <div className='add-remove-buttons'>
                    <span className='arrow' onClick={removeItem} >-</span>
                    <span className='arrow' onClick={addItem}>+</span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;