import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51It2gsSFEeFkAbaaXMfDEPH9oGnW1h1iK5IO8kgxxt4N4P11dmBPpe8BGShMeDveoNhTwCgxhSckkH9JREX5qWaz00G3Z4Yu2c';

    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name = "CRWN Clothing"
            billingAddress
            shippingAddress
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton