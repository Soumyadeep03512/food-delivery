import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const showItems = () => {
    setClick(!click);
  };
  return (
    <div className="nav-container">
      <NavLink to="/" className="nav-logo">
        TheFoodTruck.
      </NavLink>

      <div className="mobile-menu" onClick={showItems}>
        <i className={click ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i>
      </div>
      <ul className={click ? "list-items list-active" : "list-items list-hide"}>
        <li>
          <NavLink
            to="/chef"
            className="list-item"
            onClick={showItems}
            activeClassName="activelistitem"
          >
            Chefs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className="list-item"
            onClick={showItems}
            activeClassName="activelistitem"
          >
            <i class="fas fa-cart-plus"></i> Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className="list-item"
            onClick={showItems}
            activeClassName="activelistitem"
          >
            Login <i class="fas fa-user"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
