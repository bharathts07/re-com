import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "./../../redux/cart/cart.actions";

import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "./../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// calls reduce() to get the count of number of items to display inside
// reselect allows for memoization - if no change occurs then no need to re-render this
// particular component
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
