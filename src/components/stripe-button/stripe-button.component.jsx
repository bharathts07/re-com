import React from "react";

// checkout their github repo for more configurable options
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // stripe takes payments in cents. Convert from dollar to cents
  const priceForStripe = 100 * price;
  // paste your developer api publishable key here
  const publishableKey = "pk_test_Mv6f0boaChFBAmBOiuiwIgLs";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Re-com Ltd."
      billingAddress
      shippingAddress
      image=""
      description={`Your price to pay is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
