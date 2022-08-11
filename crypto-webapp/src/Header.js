import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="container">
      <div className="content">
        <h1>BUY & </h1>
        <h1>
          SELL <span>Crypto</span>
        </h1>
        <p>
          World's biggest Cryptocurrency exchange available on web as well as
          mobile phone.
        </p>
        <a href="#" class="btn">
          EXPLORE MORE
        </a>
      </div>
      <div className="background_img">
        <img
          src="https://cdn.discordapp.com/attachments/903185096268472381/1007209435246116904/unknown.png"
          alt="stocks_image"
        />
      </div>
    </div>
  );
}
