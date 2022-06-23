import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import './checkout-item.styles.scss'


const CheckoutItem = ({item}) => {
    const {addItemToCart, removeItemFromCart, removeItemTypeFromCart} = useContext(CartContext);
    const {name, quantity, price, imageUrl} = item;

    const addItem = (() => {
        addItemToCart(item);
    });

    const removeItem = (() => {
        quantity === 1
        ? (window.confirm("Do you really want to remove the this product?")) && removeItemFromCart(item)
        : removeItemFromCart(item)
    });

    const removeItemType = (() => {
        removeItemTypeFromCart(item);
    })

    return(
        <div  className='checkout-item-container'>
            <div className="image-container" >
                <img src={imageUrl} alt={name} />
            </div>
            <div className="name">{name}</div>
            <div className='quantity'>
                <div className="arrow" onClick={removeItem}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItem}>&#10095;</div>
            </div>
            <div className="price">{price}</div>
            <span className="remove-button" onClick={removeItemType}>&#10005;</span>
        </div>
    );
}

export default CheckoutItem;