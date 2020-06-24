import React from "react";
import "./DropDown.scss";
import ListItem from "./ListItem";

function PhoneList() {
  return (
    <div>
      <div className="phone-type-iphone">Iphone</div>
      <ul className="iphone-list">
        <ListItem name="iPhone 11 pro" />
        <ListItem name="iPhone 11 Pro Max" />
        <ListItem name="iPhone 11" />
        <ListItem name="Apple iPhone XR" />
        <ListItem name="Apple iPhone XS Max" />
        <ListItem name="Iphone 8 plus" />
      </ul>
    </div>
  );
}

export default PhoneList;
