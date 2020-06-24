import React from "react";
import "./DropDown.scss";
import PhoneList from "./PhoneList";

function DropDown() {
  return (
    <div className="drop-down">
      <div className="brand-list">
        <PhoneList />
      </div>
    </div>
  );
}

export default DropDown;
