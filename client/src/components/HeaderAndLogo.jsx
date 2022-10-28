import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/photos/logo.png";

function HeaderAndLogo() {
  return (
    <div className="ui grid">
      <Link to="/">
        <div className="row">
          <h1 className="ui header logoMargin">
            <img className="ui image logo" src={logo} alt="logo" />
            <div className="content">
              SASBET
              <h4 className="ui sub header">Typuj z nami!</h4>
            </div>
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default HeaderAndLogo;
