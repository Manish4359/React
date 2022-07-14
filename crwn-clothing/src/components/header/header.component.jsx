import React from "react";
import { connect } from "react-redux";

import { HeaderContainer, OptionsContainer, OptionLink, OptionCartIcon, LogoContainer, LogoLink } from "./header.styles";



import { auth } from "../../firebase/firebase.utils";


import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";



const Header = ({ currentUser, hidden, history }) => (
  <HeaderContainer>
    <LogoLink to="/">
      <LogoContainer />
    </LogoLink>

    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink type={'contact'} to="/Contact">
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


      <OptionLink cart={'cart'} to="/checkout" >
        <OptionCartIcon />
      </OptionLink>


      {/*hidden ? null : <CartDropdown />*/}
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
