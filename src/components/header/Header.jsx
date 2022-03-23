import React from "react";
import Cvt from "./Cvt";
import HeaderSocial from "./HeaderSocial";
import Education from "../education/Education";
import "./header.scss";
import "animate.css";

import Me from "../../assets/me.jpg";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello</h3>
        <h1>I AM EVANS WANG</h1>
        <h5 class="animate__animated animate__backInLeft">
          SoftWare Developer
        </h5>

        <HeaderSocial />
        <Cvt />

        <div className="me">
          <img src={Me} alt="my_selfish" />
        </div>
        <Education />
        <a href="#content" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
