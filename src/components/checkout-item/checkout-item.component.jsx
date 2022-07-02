import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import './checkout-item.styles.jsx'
import { CheckoutItemContainer, ImageContainer, Price, QuantityContainer, Value, RemoveButton } from "./checkout-item.styles.jsx";


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
        <CheckoutItemContainer >
            <ImageContainer  >
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <div >{name}</div>
            <QuantityContainer >
                <div className="arrow" onClick={removeItem}>&#10094;</div>
                <Value >{quantity}</Value>
                <div className="arrow" onClick={addItem}>&#10095;</div>
            </QuantityContainer>
            <Price >{price}</Price>
            <RemoveButton onClick={removeItemType}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;