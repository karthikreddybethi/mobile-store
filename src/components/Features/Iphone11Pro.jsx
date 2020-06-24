import React, { useState } from "react";
import "./Specification.scss";
import ProductDetails from "./ProductDetails";
import ProductSpecifications from "./ProductSpecifications";

function Iphone11Pro(props) {
  console.log(props);

  return (
    <>
      <ProductDetails />
      <ProductSpecifications />
    </>
  );
}

export default Iphone11Pro;
