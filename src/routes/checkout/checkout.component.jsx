import { Fragment } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router';

import Button from '../../components/button/button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import { selectCart } from '../../store/cart/cart.selector';
import { CheckoutContainer, CheckoutHeaderContainer, HeaderBlock, TotalContainer } from './checkout.styles';


const Checkout = () => {
    const {cartContent, cartCount, cartTotal} = useSelector(selectCart);
    const navigate = useNavigate();

    const handleGoBackToShopping = () => {
        navigate('/shop');
    }

    

    return (
        <CheckoutContainer>
                    
            {cartCount 
            ? (
                <Fragment>
                    <CheckoutHeaderContainer >
                        <HeaderBlock>Product</HeaderBlock>
                        <HeaderBlock>Description</HeaderBlock>
                        <HeaderBlock>Quantity</HeaderBlock>
                        <HeaderBlock>Price</HeaderBlock>
                        <HeaderBlock>Remove</HeaderBlock>
                    </CheckoutHeaderContainer>

                    {cartContent.map((item) => <CheckoutItem key={item.id} item={item} />)}
                    <TotalContainer >
                        <span >
                            Total: ${cartTotal}
                        </span>
                    </TotalContainer>
                    <PaymentForm />                

                </Fragment>
            ) : (
                <Fragment>
                    <span>Your cart is empty</span>
                    <Button onClick={handleGoBackToShopping} >Get back to shopping</Button>
                </Fragment>
            )

            }

        </CheckoutContainer>
    );
}

export default Checkout;