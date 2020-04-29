import React from "react";
import { Link } from "react-router-dom";
// connect is a higher order component that lets us access things related to redux
import { connect } from "react-redux";

import "./header.styles.scss";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { auth } from "./../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component.icon";
import CartDropDown from "./../cart-dropdown/cart-dropdown.component";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "./../../redux/cart/cart.selectors";
import { selectCurrentUser } from "./../../redux/user/user.selector";

// depending on the value of currentUser show either signin/ signout component
// depending on the value of hidden show/hide cart component
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

// To descructure nested values
// Is a function that allows us to access the state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// higher order components are functions that take Components are arguments and return
// the modified component
export default connect(mapStateToProps)(Header);
