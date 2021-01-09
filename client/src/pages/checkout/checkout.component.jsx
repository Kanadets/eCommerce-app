import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Spinner from "../../components/spinner/spinner.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
  SpanText,
} from "./checkout.styles";

const StripeCheckoutButton = lazy(() =>
  import("../../components/stripe-button/stripe-button.component")
);
const CheckoutItem = lazy(() =>
  import("../../components/checkout-item/checkout-item.component")
);

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <SpanText>Product</SpanText>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <SpanText>Description</SpanText>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <SpanText>Quantity</SpanText>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <SpanText>Price</SpanText>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    <Suspense fallback={<Spinner />}>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      </WarningContainer>
      <StripeCheckoutButton price={total} />
    </Suspense>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
