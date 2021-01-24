import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="address">
        <span className="addressSpan">Address</span>: <br />
        101,1st A Cross Rd
        <br />
        5th Block, Koramangala <br />
        Bangalore - 560066
      </div>
      <div className="navlinks">
        <p> CHEFS</p>
        <p>CART</p>
      </div>
      <div className="footeritems">
        Contact <br />
        FAQ
      </div>
    </div>
  );
};

export default Footer;
