import React, { useContext } from "react";
import { CartItemsContext } from "../CartItemsContext/CartItemsContext";
import iphone11ProGold from "../images/apple-iphone-11-pro-gold.jpg";

function ProductDetails() {
  const { previewCartItems, setCartItems } = useContext(CartItemsContext);
  console.log(previewCartItems);
  let handleClick = function () {
    setCartItems((prevItems) => {
      //filtering duplicates in an arry
      const arr = [];
      for (let i = 0; i < prevItems.length; i++) {
        if (previewCartItems.id !== prevItems[i].id) {
          arr.push(prevItems[i]);
        }
      }
      return [...arr, previewCartItems];
    });
  };

  return (
    <>
      <div className="product-specifications-conatainer">
        <div className="product-image">
          <img src={previewCartItems.image} alt="" />
        </div>
        <div className="product-details">
          <h1>{previewCartItems.name}</h1>
          <h2>{previewCartItems.mPrice}</h2>
          <p>DELIVERY IN 6-8 DAYS</p>
          <button onClick={handleClick}>Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
