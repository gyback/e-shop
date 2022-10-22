import { useSelector, useDispatch } from "react-redux";

import { selectCartContent } from "../../store/cart/cart.selector";
import { addItemToCart, removeItemFromCart, removeItemTypeFromCart } from "../../store/cart/cart.slice";
import './checkout-item.styles'
import { CheckoutItemContainer, ImageContainer, PriceBlock, QuantityContainer, ValueBlock, RemoveButton, NameBlock } from "./checkout-item.styles";

import { CartItemType } from "../../store/cart/cart.types";

type CheckoutItemProps = {
    item:CartItemType
}

const CheckoutItem = ({item}:CheckoutItemProps) => {
    const dispatch = useDispatch();
    const {name, quantity, price, imageUrl} = item;
    const cartContent = useSelector(selectCartContent);


    const addItem = (() => {
        dispatch(addItemToCart(item, cartContent));
    });

    const removeItem = (() => {
        quantity === 1
        ? (window.confirm("Do you really want to remove the this product?")) && dispatch(removeItemFromCart(item, cartContent))
        : dispatch(removeItemFromCart(item, cartContent))
    });

    const removeItemType = (() => {
        dispatch(removeItemTypeFromCart(item, cartContent));
    })

    return(
        <CheckoutItemContainer >
            <ImageContainer  >
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <NameBlock >{name}</NameBlock>
            <QuantityContainer >
                <div className="arrow" onClick={removeItem}>&#10094;</div>
                <ValueBlock >{quantity}</ValueBlock>
                <div className="arrow" onClick={addItem}>&#10095;</div>
            </QuantityContainer>
            <PriceBlock >{price}</PriceBlock>
            <RemoveButton onClick={removeItemType}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;