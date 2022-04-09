import React from "react";
import { connect } from "react-redux";

import { HeaderContainer,OptionsContainer,OptionLink,OptionCartIcon ,LogoContainer,LogoLink} from "./header.styles";


import { ReactComponent as Logo } from "./../../assets/logo.svg";

import { auth } from "../../firebase/firebase.utils";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";



const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoLink to="/">
      <LogoContainer />
    </LogoLink>

    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/Contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink> 
      ) : (
        <OptionLink to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <OptionCartIcon/>
      {hidden ? null : <CartDropdown />}
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden,
});

export default connect(mapStateToProps)(Header);
