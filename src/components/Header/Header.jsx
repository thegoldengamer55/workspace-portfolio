import React, { useEffect, useState } from "react";
import "./header.css";
import { FaBars, FaHamburger } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      const menu = document.getElementById("hamburger");
      if (menu.contains(target)) return;
      setMenu(false);
    };

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  });

  // if escape key is pressed closes the toggles
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setMenu(false);
    };
    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  function Clicked() {
    setMenu(!menu);
  }

  return (
    <div>
      <header>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#process" className="button">
              Process
            </a>
          </li>
        </ul>
        <div className="small-header" id="small-header">
          <div
            aria-expanded={menu === true ? "hamburger-true" : "hamburger-false"}
            className={menu === true ? "hamburger-true" : "hamburger-false"}
            id="hamburger"
          >
            <FaBars
              className={
                menu === true ? "hamburger-menu-close" : "hamburger-menu-open"
              }
              onClick={() => Clicked()}
            />
            <FaX
              className={
                menu === true ? "hamburger-menu-open" : "hamburger-menu-close"
              }
              onClick={() => Clicked()}
            />
          </div>
          <ul className={menu === true ? "show" : "hamburger-menu-close"}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#process" className="button">
                Process
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
