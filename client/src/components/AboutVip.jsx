import React from 'react'
import HeaderUseage from "./HeaderUseage";
import vip from "../photos/vip.png"


function AboutVip() {
  return (
    <div className="ui fluid container">
    <div className="ui fluid container">
      <HeaderUseage />
    </div>
    <div className="ui center aligned fluid container toolsContent">
    <h2 class="ui icon header">
  <i class="info circle icon"></i>
  <div class="content">
   Premium  Vip Users
    <div class="sub header">Here's what you will get by joining to our vip users</div>
    <div class="ui inverted segment">
  <div class="ui inverted relaxed divided list">
    <div class="item">
      <div class="content">
        <div class="header"> - More Tips</div>
        You'll get exclusive tips with more accurency
      </div>
    </div>
    <div class="item">
      <div class="content">
        <div class="header"> - Higher Odds</div>
         Tips with courses over 2.5 with over 50% win rate
      </div>
    </div>
    <div class="item">
      <div class="content">
        <div class="header"> - More tools</div>
            Tools like Kelly Criterion Calculator or Poisson Distribution Calculator and more will be available for you.
      </div>
    </div>
    <div class="item">
      <div class="content">
        <div class="header"> - Private Vip Chat</div>
        You will be added to our private group on Telegram. To exchange insights and knowledge with other users of our community.
      </div>
    </div>
    <div class="item">
      <div class="content">
        <div class="header"> - More tools</div>
            Tools like Kelly Criterion Calculator or Poisson Distribution Calculator and more will be available for you.
      </div>
    </div>
    <div class="item">
      <div class="content">
        <div class="header"> - More tools</div>
            Tools like Kelly Criterion Calculator or Poisson Distribution Calculator and more will be available for you.
      </div>
    </div>
  </div>

</div>

  </div>
</h2>
           <div> <img className='vipImg' src ={vip} alt= ""></img></div>
    </div>
  </div>
  )
}

export default AboutVip