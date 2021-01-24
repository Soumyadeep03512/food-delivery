import React, { useEffect } from "react";
import fire from "../config/Fire";
import "./display.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Display = () => {
  const signOut = () => {
    fire.auth().signOut();
  };
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  });
  return (
    <div className="display" data-aos="fade-right">
      <div className="displaytext">
        <p>Congrats you have successfully logged in.</p>
      </div>
      <div className="displaybutton">
        <button onClick={signOut} className="logout">
          {" "}
          Log out{" "}
        </button>
      </div>
    </div>
  );
};

export default Display;
