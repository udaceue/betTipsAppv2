import React from "react";
import { Link } from "react-router-dom";

function DropdownMenu({ dropdownData, menuName }) {
  const showLinks = () => {
    const droppedItems = dropdownData.map((el) => {
      const { linkName, iconName, pathName } = el;
      return (
        <Link className="item" to={pathName}>
          <i className={iconName} /> {linkName}
        </Link>
      );
    });
    return droppedItems;
  };

  return (
    <div className="ui simple dropdown item">
      <i className="star icon" />
      {menuName}
      <i className="dropdown icon" />
      <div className="menu">{showLinks()}</div>
    </div>
  );
}

export default DropdownMenu;
