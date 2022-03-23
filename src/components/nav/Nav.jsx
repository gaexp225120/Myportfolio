// import React from "react";
import { useState } from "react";
import "./nav.scss";

import {
  BiHome,
  BiUserCircle,
  BiBookAlt,
  BiMessageDetail,
} from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : " "}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : " "}
      >
        <BiUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : " "}
      >
        <BiBookAlt />
      </a>
      <a
        href="#service"
        onClick={() => setActiveNav("#service")}
        className={activeNav === "#service" ? "active" : " "}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : " "}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
