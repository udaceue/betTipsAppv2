/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeaderWithMenu from "../components/HeaderWithMenu";
import logo from "../assets/photos/logo.png";
import LoginForm from "../forms/LoginForm";
import MenuLink from "../components/utils/MenuLinks";

function LoginPage() {
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
                <span className="LoginHeader">Log-in </span>
                <span className="IntoYourAcc">to your account</span>
              </div>
            </h2>
          </div>

          <LoginForm />

          <div className="ui message">
            New to us?
            <MenuLink name="Sign Up" to="/SignUp" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
