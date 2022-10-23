import React from "react";
import HeaderUseage from "../components/HeaderUseage";
import OddsConverter from "../components/Calc/oddsConverterLogic/OddsConverter";
import RakeCalculator from "../components/Calc/rakeCalculatorLogic/RakeCalculator";
import SureBet from "../components/Calc/sureBetLogic/SureBet";

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
