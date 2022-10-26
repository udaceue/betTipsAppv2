/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import MenuLink from "./utils/MenuLinks"

function MenuBar() {
  return (
    <nav>
      <div className="ui attached stackable menu">
        <div className="ui fluid container">

          <MenuLink name = "Home" to = "/" icon = "home icon"/>
          <MenuLink name = "BetTips" to = "/BetTips" icon = "gamepad icon"/>
          <MenuLink name = "Tools" to = "/Tools" icon = "wrench icon" />

          <div className="ui simple dropdown item">
            <i className="star icon" />
            Vip
            <i className="dropdown icon" />
            <div className="menu">
              <Link className="item" to="/AboutVip">
                <i className="info circle icon" /> About Vip
              </Link>
              <a className="item">
                <i className="plus square icon" /> Become a vip
              </a>
              <a className="item">
                <i className="gamepad icon" /> Vip Tips
              </a>
            </div>
          </div>

          <div className="ui simple dropdown item">
            More
            <i className="dropdown icon" />
            <div className="menu">
              <a className="item">
                <i className="edit icon" /> Edit Profile
              </a>
              <a className="item">
                <i className="globe icon" /> Choose Language
              </a>
              <a className="item">
                <i className="settings icon" /> Account Settings
              </a>
            </div>
          </div>

          {/* {RIGHT ITEM/SEARCH BAR} */}
          <div className="right item">
            <div className="ui input">
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="item">

            <MenuLink name = "Login" to = "/Login" icon = "sign in alternate icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
