import React from "react";

function ListFieldsGenerator({ heading, description }) {
  return (
    <div className="item">
      <div className="content">
        <div className="header vipHeaderList">{heading}</div>
        {description}
      </div>
    </div>
  );
}

export default ListFieldsGenerator;
