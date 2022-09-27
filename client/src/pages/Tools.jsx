import React from "react";
import HeaderUseage from "../components/HeaderUseage";
import OddsConverter from "../components/OddsConverter";
import RakeCalculator from "../components/RakeCalculator";
import SureBet from "../components/SureBet";

function Tools() {
  return (
    <div className="ui fluid container">
      <div className="ui fluid container">
        <HeaderUseage />
      </div>
      <div className="ui fluid container toolsContent">
        <OddsConverter />
        <RakeCalculator />
        <SureBet />
      </div>
    </div>
  );
}

export default Tools;
