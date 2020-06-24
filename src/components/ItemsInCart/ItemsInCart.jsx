import React, { useContext } from "react";
import "./ItemsInCart.scss";
import ItemDetails from "./ItemDetails";
import { CartItemsContext } from "../CartItemsContext/CartItemsContext";

function ItemsInCart() {
  let setTrue;
  const { cartItems } = useContext(CartItemsContext);
  if (cartItems.length === 0) {
    setTrue = true;
  }
  return (
    <div className="purchase-list">
      {setTrue ? (
        <div className="empty-cart">
          <h2>Your Cart is empty</h2>
        </div>
      ) : (
        cartItems.reverse().map((cartItem, index) => {
          return (
            <ItemDetails
              id={index}
              key={index}
              name={cartItem.name}
              price={cartItem.mPrice}
              image={cartItem.image}
            />
          );
        })
      )}
    </div>
  );
}

export default ItemsInCart;
