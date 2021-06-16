import React from "react";

import { IoIosFlame } from "react-icons/io";

export default function Navbar() {
  return (
    <nav id="nav-bar">
      <div className="logo">
        <i>
          <IoIosFlame />
        </i>
        <h3>Haapanen</h3>
      </div>
      <ul>
        <li className="nav-link">
          <a href="">Home</a>
        </li>
        <li className="nav-link">
          <a href="">Work</a>
        </li>
        <li className="nav-link">
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
