import { Fragment, useContext, useEffect, useState } from 'react';
import Button from '../../components/button/button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router';

import './checkout.styles.scss';

const Checkout = () => {
    const {cartContent, cartCount, cartTotal} = useContext(CartContext);
    const navigate = useNavigate();

    const handleGoBackToShopping = () => {
        navigate('/shop');
    }
    

    return (
        <div className="checkout-container">
                    
            {cartCount 
            ? (
                <Fragment>
                    <div className="checkout-header" >
                        <span>Product</span>
                        <span>Description</span>
                        <span>Quantity</span>
                        <span>Price</span>
                        <span>Remove</span>
                    </div>

                    {cartContent.map((item) => <CheckoutItem key={item.id} item={item} />)}
                    <div className='total'>
                        <span >
                            Total: ${cartTotal}
                        </span>
                    </div>
                    <Button >place order</Button>

                </Fragment>
            ) : (
                <Fragment>
                    <span>Your cart is empty</span>
                    <Button onClick={handleGoBackToShopping} >Get back to shopping</Button>
                </Fragment>
            )

            }

        </div>
    );
}

export default Checkout;