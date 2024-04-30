import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-router-dom";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="Bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="/home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/bmi">Bmi-Calculator</Link>
          </li>
          <li>
            <Link to="/calories">Calories-Calculator</Link> {/* Link to the Calories Calculator */}
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="/why"
              spy={true}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="/plan"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link to="/program" spy={true} smooth={true}>
              Programs
            </Link>
          </li>
          
          
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="/testi"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
          
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="/join"
              spy={true}
              smooth={true}
              className="join-button"
            >
              Join Us
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
