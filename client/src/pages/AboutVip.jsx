import React from "react";
import HeaderUseage from "../components/HeaderUseage";
import vip from "../assets/photos/vip.png";

function AboutVip() {
  return (
    <div className="ui fluid container">
      <div className="ui fluid container">
        <HeaderUseage />
      </div>
      <div className="ui center aligned fluid container toolsContent">
        <h2 className="ui icon header vipHeaderList">
          <i className="info circle icon"></i>
          <div className="content">
            Premium Vip Users
            <div className="sub header vipAbout">
              Here's what you will get by joining to our vip users
            </div>
            <div className="ui inverted segment">
              <div className="ui inverted relaxed divided list">
                <div className="item">
                  <div className="content">
                    <div className="header vipHeaderList"> - More Tips</div>
                    You'll get exclusive tips with more accurency
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header vipHeaderList"> - Higher Odds</div>
                    Tips with courses over 2.5 with over 50% win rate
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header vipHeaderList"> - More tools</div>
                    Tools like Kelly Criterion Calculator or Poisson
                    Distribution Calculator and more will be available for you.
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header vipHeaderList">
                      {" "}
                      - Private Vip Chat
                    </div>
                    You will be added to our private group on Telegram. To
                    exchange insights and knowledge with other users of our
                    community.
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header vipHeaderList">
                      {" "}
                      - More Disciplines
                    </div>
                    Tips from other disciplines like tenis, hokey, martial arts
                    and more...
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header vipHeaderList">
                      {" "}
                      - Full Bets History
                    </div>
                    Do you wanna how much you won or lost with our bets? Would
                    you like to know your yield? Get Vip Today!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </h2>
        <div className="header">
          {" "}
          To Buy vip you need to dm me at xdxdx@xdxdxdxd.com or by
          <button className="ui fluid medium teal button vipButton">
            Clicking Here
          </button>
        </div>

        <div>
          {" "}
          <img className="vipImg" src={vip} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default AboutVip;
