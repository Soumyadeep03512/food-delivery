import React, { useEffect } from "react";
import "./header.css";
import video from "./pizzavideo.mp4";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <div className="video">
        <video autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="bannerdiv">
        <p className="bannerheading">YOUR FAV FOOD AT A GO !</p>
        <br />
        <p className="bannertext">Order pizzas, pastas and more.</p>
        <br />
        <NavLink to="/chef">
          <button className="bannerbtn" type="submit">
            CHEFS
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
