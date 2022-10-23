/* eslint-disable react/button-has-type */
import { useState } from "react";
import SureBetCalc from "./SureBetCalc";
import ShowToolButton from "../ShowToolButton";

function SureBet() {
  const [button, setButton] = useState("true");



  const showComponent = () => {
    setButton(!button);
  };
  return (
    <>
      <div className="ui container">
        <div className="ui equal width grid">
          <div className="column">
            {button && (
              <div className="ui huge header textCenter">Sure Bet</div>
            )}
          </div>
          <div className="equal width row segmentSpace">
            <div className="column">
              <div className="ui placeholder segment ">
                {button ? (
                  <>
                    <div className="ui icon header">
                      <i className="user secret icon" />
                      Find out whether a bet is sure bet or not and also, how
                      much you should invest for maximum profit
                    </div>

                    <ShowToolButton showComponent={showComponent}/>

                  </>
                ) : (
                  <>
                    <SureBetCalc />
                    <button
                      className="ui primary button zIndex"
                      onClick={showComponent}
                    >
                      Hide Tool
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <DecimalOdds />
  <Propability /> */}
    </>
  );
}

export default SureBet;
