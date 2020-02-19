import React from "react";
import StripCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_YM0uvvqztFDwB7jJSsTMHIIF00T6nzGokp";

  const onToken = (token) => {
    console.log(token);
    alert("Payment succesful!");
  }

  return (
    <StripCheckout
      label="Pay Now"
      name="Online Store"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;
