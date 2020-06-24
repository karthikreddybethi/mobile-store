import React, { useContext, useState } from "react";
import { CartItemsContext } from "../CartItemsContext/CartItemsContext";
import { Link } from "react-router-dom";

function ItemDetails({ name, price, image, id }) {
  const {
    setCartItems,
    cartItems,
    setPreviewCartItems,
    setSpecifications,
    specifications,
  } = useContext(CartItemsContext);

  const [value, setValue] = useState(1);

  function handleChange(e) {
    if (e.target.value === "") {
      setValue(1);
    } else {
      setValue(e.target.value);
    }
  }

  function handleIncrement() {
    setValue(parseInt(value) + 1);
  }

  function handleDecrement() {
    if (value > 1) {
      setValue(value - 1);
    }
  }

  function handleKeydown(e) {
    if (e.which === 38 || e.which === 40) {
      e.preventDefault();
    }
  }

  function handleDelete() {
    const deleteTwo = cartItems.filter((cartItem, index) => {
      return index !== id;
    });

    setCartItems(deleteTwo);
  }

  function handlePreviewCartItems(e) {
    e.preventDefault();
    const item = {
      name: name,
      mPrice: price,
      image: image,
      id: id,
    };
    const others = specifications;
    setPreviewCartItems(item);
    setSpecifications(others);
  }

  return (
    <div className="items-container">
      <div className="item-details">
        <img src={image} alt="" />
        <h2 onClick={handlePreviewCartItems}>
          <Link to={`${name}`}> {name} </Link>
        </h2>
      </div>
      <div>
        <div className="qty-price-wrap">
          <div className="quantity">
            <div className="label">
              <h3>Quantity</h3>
            </div>
            <div className="qty-wrap">
              <button type="button" className="less" onClick={handleDecrement}>
                -
              </button>
              <input
                name={name}
                type="number"
                onChange={handleChange}
                onKeyDown={handleKeydown}
                value={value}
              />
              <button type="button" className="more" onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>
          <div className="price">
            <h3>Price</h3>
            <h3>{`${value > 0 ? parseInt(price) * value : price} zł`}</h3>
          </div>
        </div>
      </div>
      <div className="delete">
        <button onClick={handleDelete}>X</button>
      </div>
    </div>
  );
}

export default ItemDetails;
