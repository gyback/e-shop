import { useDispatch, useSelector } from 'react-redux';
import { selectCartContent } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.slice';
import { ItemType } from '../../store/categories/categories.types';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { Footer, Name, Price, ProductCardContainer } from './product-card.styles';

type Props = {
    product: ItemType
}

const ProductCard = ({product}:Props) => {
    const dispatch = useDispatch();
    const {name, price, imageUrl} = product;

    const cartContent = useSelector(selectCartContent);
    
    const addItem = () => {
        dispatch(addItemToCart(product, cartContent));
    }

    return(
        <ProductCardContainer >
            <img src={imageUrl} alt={`${name}`}/>
            <Footer className='footer'>
                <Name className='name'>{name}</Name>
                <Price className='price'>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.INVERTED} onClick = {addItem} >Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;