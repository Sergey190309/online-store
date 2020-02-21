import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContaier,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
  StipeButtonContainer
} from "./checkout.styles";

const CheckoutPage = ({cartItems, total}) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContaier>
      <HeaderBlockContainer><span>Product</span></HeaderBlockContainer>
      <HeaderBlockContainer><span>Description</span></HeaderBlockContainer>
      <HeaderBlockContainer><span>Quantity</span></HeaderBlockContainer>
      <HeaderBlockContainer><span>Price</span></HeaderBlockContainer>
      <HeaderBlockContainer><span>Remove</span></HeaderBlockContainer>
    </CheckoutHeaderContaier>
    {
      cartItems.map(cartItem =>
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      )
    }
    <TotalContainer>
      <span>Total: ${total}</span>
    </TotalContainer>
    <WarningContainer>
      *Please user the following bank card number for test payment*<br />
      4242 4242 4242 4242, exp: 01/21, CVV: 123
    </WarningContainer>
    <StipeButtonContainer>
      <StripeCheckoutButton price={total} />
    </StipeButtonContainer>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
