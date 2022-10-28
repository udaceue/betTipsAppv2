/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MenuLink from "./utils/MenuLinks";
import DropdownMenu from "./DropdownMenu";
import vipDropdownData from "../data/vipDropdownData";
import moreDropdownData from "../data/moreDropdownData";


function MenuBar() {


  return (
    <nav>
      <div className="ui attached stackable menu">
        <div className="ui fluid container">
          <MenuLink name="Home" to="/" icon="home icon" />
          <MenuLink name="BetTips" to="/BetTips" icon="gamepad icon" />
          <MenuLink name="Tools" to="/Tools" icon="wrench icon" />

          <DropdownMenu dropdownData={vipDropdownData} menuName="Vip" />

          <DropdownMenu dropdownData={moreDropdownData} menuName="More" />

          {/* {RIGHT ITEM/SEARCH BAR} */}
          <div className="right item">
            <div className="ui input">
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="item">
            <MenuLink name="Login" to="/Login" icon="sign in alternate icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
