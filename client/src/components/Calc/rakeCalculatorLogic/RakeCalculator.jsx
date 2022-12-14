/* eslint-disable react/button-has-type */
import { useState } from "react";
import TwowayRake from "./TwowayRake";
import ShowToolButton from "../calcUtils/ShowToolButton";

function RakeCalculator() {
  const [button, setButton] = useState("true");

  const showComponent = () => {
    setButton(!button);
  };

  return (
    <div className="ui container">
      <div className="ui equal width grid">
        <div className="column">
          {button && (
            <div className="ui huge header textCenter">RakeCalculator</div>
          )}
        </div>
        <div className="equal width row segmentSpace">
          <div className="column">
            <div className="ui placeholder segment ">
              {button ? (
                <ShowToolButton
                  showComponent={showComponent}
                  toolDescription={`Convert odds from one format to another and also to their implied
                  propability`}
                  icon={"percent icon"}
                />
              ) : (
                <>
                  <div>
                    <TwowayRake />
                  </div>
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
  );
}

export default RakeCalculator;
