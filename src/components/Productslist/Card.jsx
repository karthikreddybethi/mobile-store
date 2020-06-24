import React, { useState, useContext } from "react";
import "./Card.scss";
import { CartItemsContext } from "../CartItemsContext/CartItemsContext";
import { Link } from "react-router-dom";

function Card({ modelName, price, image, id, others }) {
  const { setCartItems, setSpecifications, setPreviewCartItems } = useContext(
    CartItemsContext
  );

  let handleClick = function () {
    const item = {
      name: modelName,
      mPrice: price,
      image: image,
      id: id,
    };

    setCartItems((prevItems) => {
      //filtering duplicates in an arry
      const arr = [];
      for (let i = 0; i < prevItems.length; i++) {
        if (id !== prevItems[i].id) {
          arr.push(prevItems[i]);
        }
      }
      return [...arr, item];
    });
    setSpecifications(others);
  };

  function handlePreviewItem() {
    const item = {
      name: modelName,
      mPrice: price,
      image: image,
      id: id,
    };
    setPreviewCartItems(item);
    setSpecifications(others);
  }

  return (
    <div className="container">
      <div className="product-wraper">
        <figure>
          <a>
            <img src={image} alt="" />
          </a>
        </figure>
        <div className="product-name">
          <h5 onClick={handlePreviewItem}>
            <Link to={`${modelName}`}>{modelName}</Link>
          </h5>
        </div>
        <div className="price">
          <p>{price}</p>
        </div>
        <div className="add-cart">
          <button onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
