/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeaderWithMenu from "../components/HeaderWithMenu";
import logo from "../assets/photos/logo.png";
import { Link } from "react-router-dom";

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
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon" />
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="ui fluid large teal submit button">Login</div>
            </div>

            <div className="ui error message" />
          </form>
          <div className="ui message">
            New to us?
            <Link className="item" to="/SignUp">
              {" "}
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
