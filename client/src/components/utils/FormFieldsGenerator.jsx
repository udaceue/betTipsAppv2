import React from "react";

function FormFieldsGenerator({ iconName, nameAttr, placeholder }) {
  return (
    <div className="field">
      <div className="ui left icon input">
        <i className={iconName} />
        <input type="text" name={nameAttr} placeholder={placeholder} />
      </div>
    </div>
  );
}

export default FormFieldsGenerator;
