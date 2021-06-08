import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51It2gsSFEeFkAbaaXMfDEPH9oGnW1h1iK5IO8kgxxt4N4P11dmBPpe8BGShMeDveoNhTwCgxhSckkH9JREX5qWaz00G3Z4Yu2c';

    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        })
        .then(response => {
          alert('succesful payment');
        })
        .catch(error => {
          console.log('Payment Error: ', error);
          alert(
            'There was an issue with your payment! Please make sure you use the provided credit card.'
          );
        });
    };

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