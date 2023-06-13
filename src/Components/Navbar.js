import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav>
      <div className="logo">Logo</div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
