import React, { useState } from "react";
import HeaderWithMenu from "./HeaderWithMenu";
import res from "../data/response.json";
import Tips from "./Tips";
import DropdownCountries from "./DropdownCountries";
import TipsColumnsLayout from "../layouts/TipsColumnsLayout";

function BetTips() {
  const [response, setResponse] = useState(res);
  const [sortArg, setSortArg] = useState("All Leagues");
  const clearFilters = () => {
    setSortArg("All Leagues");
  };

  return (
    <div className="ui fluid container">
      <div className="ui fluid container">
        <HeaderWithMenu />
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
        <DropdownCountries
          response={response}
          sortingAlg={(word) => {
            setSortArg(word);
          }}
          countryName={sortArg}
        />
        <div className="ui fluid container test">
          <TipsColumnsLayout />
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
