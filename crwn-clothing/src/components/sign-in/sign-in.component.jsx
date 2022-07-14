import React from "react";

import { signInWithGoogle, auth } from "./../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {

    
    e.preventDefault();

    const { email, password } = this.state; 

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (err) {
      
      console.error(err);
    }
  };
  
  
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;


    return (
      <div className="sign-in">
        <h2> already have an account</h2>
        <span>Sign in with an email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            value={email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            googleSignIn={"signinwithgoogle"}
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;

/* 
 {
    apiKey: "AIzaSyCKK6NflcVmo9Cp8SVKzf9dlAn_PBHEqGg",
    authDomain: "react-crown-cloth.firebaseapp.com",
    projectId: "react-crown-cloth",
    storageBucket: "react-crown-cloth.appspot.com",
    messagingSenderId: "921471415656",
    appId: "1:921471415656:web:da4fa1e5cc79249bf712dd",
    measurementId: "G-VPVJ7NHB83"
  };
*/
