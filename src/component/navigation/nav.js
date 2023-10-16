import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

function Navigation() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav_container">
        <img
          onClick={() => {
            navigate("/");
          }}
          className="nav_logo"
          src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          alt=""
        />
        <img
          onClick={() => {
            navigate("/profile");
          }}
          className="nav_avator"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navigation;
