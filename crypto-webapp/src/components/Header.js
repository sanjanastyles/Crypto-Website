import React from "react";
import { HeaderContainer } from "../styles/Header.style";
import Coins from "./Coins";

export default function Header() {
  return (
    <HeaderContainer>
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
          <a href="#" className="btn">
            EXPLORE MORE
          </a>
        </div>
        <div className="background_img">
          <img
            src="https://cdn.discordapp.com/attachments/903185096268472381/1007209435246116904/unknown.png"
            alt="stocks_image"
          />
          <div className="coinList">
            <Coins
              icon="https://bitcoin.org/img/icons/opengraph.png?1657703267"
              name="Bitcoin"
              prefix="$"
              price={0.0}
            />
            <Coins
              icon="https://s2.coinmarketcap.com/static/img/coins/200x200/825.png"
              name="Tether"
              price={0.0}
              prefix="$"
            />
            <Coins
              icon="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/640px-Ethereum_logo_translucent.svg.png"
              name="Ethereum"
              price={0.0}
              prefix="$"
            />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}
