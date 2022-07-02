import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { Footer, Name, Price, ProductCardContainer } from './product-card.styles.jsx';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    
    const addItem = () => {
        addItemToCart(product);
    }

    return(
        <ProductCardContainer >
            <img src={imageUrl} alt={`${name}`}/>
            <Footer className='footer'>
                <Name className='name'>{name}</Name>
                <Price className='price'>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick = {addItem} >Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;