import React from "react";
import "./FeaturesBanner.scss";

function FeaturesBanner() {
  return (
    <div className="features-banner">
      <ul>
        <li>
          <i className="fas fa-people-carry"></i>
          <span>Free Shipping</span>
        </li>
        <li>
          <i className="fas fa-truck truck"></i>
          <span>Fast Delivery</span>
        </li>
        <li>
          <i className="fas fa-globe-europe"></i>
          <span>Delivery to EU countries</span>
        </li>
        <li>
          <i className="fas fa-certificate"></i>
          <span>24 months warranty</span>
        </li>
      </ul>
    </div>
  );
}

export default FeaturesBanner;
