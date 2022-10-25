import React, { useState } from "react";
import HeaderUseage from "./HeaderUseage";
import res from "../data/response.json";
import Tips from "./Tips";
import DropdownFlags from "./DropdownFlags";

function BetTips() {
  const [response, setResponse] = useState(res);
  const [sortArg, setSortArg] = useState("All Leagues");

  const clearFilters = () => {
    setSortArg("All Leagues");
  };

  return (
    <div className="ui fluid container">
      <div className="ui fluid container">
        <HeaderUseage />
      </div>

      <div className="ui fluid container">
        <h2 className="ui center aligned icon header">
          <i className="futbol icon"></i>
          <div className="content">
            Our Tips
            <div className="sub header">
              We suggest you to analize it by yourself
            </div>
          </div>
        </h2>
      </div>
      <div className="ui fluid container noCss" id="test2">
        <DropdownFlags
          response={response}
          sortingAlg={(word) => {
            setSortArg(word);
          }}
        />
        <div className="ui fluid container test">
          <div className="ui fluid container">
            <div className="ui six column centered grid tipsColumn">
              <div className="ui column country stroke hide">Country</div>
              <div className="ui column league stroke hide">League</div>
              <div className="ui column homeTeam stroke">HomeTeam</div>
              <div className="ui column versus stroke"> Versus </div>
              <div className="ui column awayTeam stroke">AwayTeam</div>
              <div className="ui column ourTip stroke">Tip</div>
            </div>
          </div>
          <Tips
            response={response}
            sorting={sortArg}
            clearFilters={clearFilters}
          />
        </div>
      </div>
    </div>
  );
}

export default BetTips;
