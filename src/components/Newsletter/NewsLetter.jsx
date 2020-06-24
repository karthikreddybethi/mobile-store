import React from "react";
import "./Newsletter.scss";

function Newsletter() {
  return (
    <>
      <div className="newsletter-container">
        <form>
          <h1>Subscribe for Newsletter</h1>
          <input type="text" placeholder="Email" />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </>
  );
}

export default Newsletter;
