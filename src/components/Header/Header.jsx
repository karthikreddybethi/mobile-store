import React, { useState, useContext } from "react";
import "./Header.scss";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Dropdown from "./DropDown";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import { CartItemsContext } from "../CartItemsContext/CartItemsContext";
import { Link } from "react-router-dom";
import Hamburger from "../images/hamburger.png";

function Header() {
  const { cartItems } = useContext(CartItemsContext);
  const [hide, setHide] = useState(false);
  const [cartShow, setCartShow] = useState(false);

  const [mobiMenu, setMobiMenu] = useState(false);

  function handleClick() {
    hide ? setHide(false) : setHide(true);
  }

  function cartDropdown() {
    cartShow ? setCartShow(false) : setCartShow(true);
  }

  function handleMobiMenu() {
    setMobiMenu(!mobiMenu);
    console.log("mobimenu");
  }

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">Mobile Shop</Link>
        </h1>
      </div>
      <div className="navigation">
        <ul>
          <li onClick={handleClick} className="first-dropdown">
            <div className="mobile-phones-dropdown">
              Mobile Phones
              <span>
                <ArrowDropDownIcon />
              </span>
            </div>
          </li>
          <li>Electronics</li>
          <li>Accessories</li>
          <li>Brands</li>
        </ul>
        <div
          style={{
            transform: `scaley(${hide ? 1 : 0})`,
            transformOrigin: "top",
          }}
          className="dropdown-banner"
        >
          <Dropdown />
        </div>
      </div>
      {/* -------mobile navigation------ */}

      <div
        className="mobi-navigation"
        style={
          ({ transform: " translatex(0)" },
          mobiMenu
            ? { transform: " translatex(0)" }
            : { transform: "translatex(400px)" })
        }
      >
        <ul>
          <li onClick={handleClick} className="first-dropdown">
            <div className="mobile-phones-dropdown">
              Mobile Phones
              <span>
                <ArrowDropDownIcon />
              </span>
            </div>
          </li>
          <li>Electronics</li>
          <li>Accessories</li>
          <li>Brands</li>
        </ul>
        <div
          style={{
            transform: `scaley(${hide ? 1 : 0})`,
            transformOrigin: "top",
          }}
          className="mobi-dropdown-banner"
        >
          <Dropdown />
        </div>
      </div>

      {/* -------mobile navigation------ */}

      <div className="cart">
        <div className="cart-number" onClick={cartDropdown}>
          <ShoppingBasketIcon className="shopping-basket" />
          <span className="cart-items-number">{cartItems.length}</span>
        </div>
        <div
          className="items-in-cart"
          style={{
            transform: `scaley(${cartShow ? 1 : 0})`,
            transformOrigin: "top",
          }}
        >
          <ItemsInCart />
        </div>
      </div>
      <div>
        <button className="hamburger" onClick={handleMobiMenu}>
          <img src={Hamburger} alt="" />
        </button>
      </div>
    </header>
  );
}

export default Header;
