import React from "react";

function ShowToolButton({ showComponent, toolDescription, icon }) {
  return (
    <>
      <div className="ui icon header">
        <i className={icon} />
        {toolDescription}
      </div>

      <button className="ui primary button" onClick={showComponent}>
        Show Tool
      </button>
    </>
  );
}

export default ShowToolButton;
