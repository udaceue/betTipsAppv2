import React from "react";
import HeaderWithMenu from "../components/HeaderWithMenu";
import vip from "../assets/photos/vip.png";
import AboutVipListLayout from "../layouts/AboutVipListLayout";

function AboutVip() {
  return (
    <div className="ui fluid container">
      <div className="ui fluid container">
        <HeaderWithMenu />
      </div>
      <div className="ui center aligned fluid container toolsContent">
        <h2 className="ui icon header vipHeaderList">
          <i className="info circle icon"></i>
          <div className="content">
            Premium Vip Users
            <div className="sub header vipAbout">
              Here's what you will get by joining to our vip users
            </div>
            <AboutVipListLayout />
          </div>
        </h2>
        <div className="header">
          To Buy vip you need to dm me at xdxdx@xdxdxdxd.com or by
          <button className="ui fluid medium teal button vipButton">
            Clicking Here
          </button>
        </div>

        <div>
          <img className="vipImg" src={vip} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default AboutVip;
