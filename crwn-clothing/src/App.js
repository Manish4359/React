import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./shop/shop.component";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import { createStructuredSelector } from "reselect";
import {selectCurrentUser} from './redux/user/user.selectors';

import CheckoutPage from "./pages/checkout/checkout.component";

import Stripe from "./components/stripe/stripe";

class App extends React.Component {
  unsubscribeFromAuth = () => null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
 
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });

        // console.log(this.state);
      } else {
        setCurrentUser(userAuth); //currentUser:null
      }
      //this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/stripe" component={Stripe} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() =>
            this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInAndSignUpPage />
            )
          }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

