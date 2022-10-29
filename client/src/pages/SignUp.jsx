import React from "react";
import HeaderWithMenu from "../components/HeaderWithMenu";
import logo from "../assets/photos/logo.png";
import { Link } from "react-router-dom";
import SignUpForm from "../forms/SignUpForm";

function SignUp() {
  return (
    <div className="ui fluid container">
      <div className="ui fluid container">
        <HeaderWithMenu />
      </div>

      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <div className="loginLogo">
            <h2 className="ui teal image header">
              <img src={logo} className="image" alt="" />
              <div className="content">
                <span className="LoginHeader">Create your Acc</span>
              </div>
            </h2>
          </div>

          <SignUpForm />

          <div className="ui message">
            Have account already? <Link to="/Login">LogIn Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
