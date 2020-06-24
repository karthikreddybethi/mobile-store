import React from "react";
import "./Footer.scss";
import visa from "../images/visa.png";
import cache from "../images/cache.png";
import card from "../images/card.png";
import paypal from "../images/paypal.png";
import mastercard from "../images/mastercard.png";
import bankTransfer from "../images/bank-transfer.png";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-logo">
          <h1>Mobileshop</h1>
        </div>
        <div className="footer-details">
          <div className="payment-options">
            <h3>Payment Options</h3>
            <div className="payment-options-icons">
              <img src={visa} alt="" />
              <img src={mastercard} alt="" />
              <img src={paypal} alt="" />
              <img src={bankTransfer} alt="" />
              <img src={card} alt="" />
              <img src={cache} alt="" />
            </div>
          </div>
          <div className="about-us">
            <h3>ABOUT US</h3>
            <ul>
              <li>About the compony</li>
              <li>Contact</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="contact">
            <h3>CONTACT</h3>
            <ul>
              <li>
                Call Center{" "}
                <span>
                  <a href="tel:+48739468338">+48739468338</a>
                </span>
              </li>
              <li>
                Email{" "}
                <span>
                  <a href="mailto:info@gmail.com">info@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
