import React, { useState, createContext } from "react";

export const CartItemsContext = createContext();

export const CartItemsProvider = (props) => {
  const [specifications, setSpecifications] = useState({
    specs: [],
    packageContent: [],
  });
  const [previewCartItems, setPreviewCartItems] = useState({ image: "#" });
  console.log(previewCartItems);

  const [cartItems, setCartItems] = useState([]);
  const [rise, setRise] = useState(1);
  const extra = (extraValue) => {
    setRise(extraValue);
  };
  // console.log(rise);
  console.log(specifications);

  return (
    <CartItemsContext.Provider
      value={{
        setCartItems,
        cartItems,
        setRise,
        rise,
        extra,
        specifications,
        setSpecifications,
        previewCartItems,
        setPreviewCartItems,
      }}
    >
      {props.children}
    </CartItemsContext.Provider>
  );
};
