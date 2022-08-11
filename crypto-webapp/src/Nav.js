import React from "react";
import "./Nav.css";

export default function Nav() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#"> Market </a>
          </li>
          <li>
            <a href="#"> Features </a>
          </li>
          <li>
            <a href="#"> White Papers </a>
          </li>
          <li>
            <a href="#"> About Us </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
