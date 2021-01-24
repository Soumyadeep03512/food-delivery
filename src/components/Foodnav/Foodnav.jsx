import React from "react";
import { NavLink } from "react-router-dom";
import "./foodnav.css";
const Foodnav = () => {
  return (
    <div className="foodnav-container">
      <ul className="foodlist-items">
        <li>
          <NavLink
            to="/"
            className="foodlist-item"
            activeClassName="activefoodlist"
          >
            Pizza
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/burger"
            className="foodlist-item"
            activeClassName="activefoodlist"
          >
            Burger
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pasta"
            className="foodlist-item"
            activeClassName="activefoodlist"
          >
            Pasta
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Foodnav;
