import { useEffect, useState } from "react";
import React from "react";
import { HeaderContainer } from "../styles/Header.style";
import Coins from "./Coins";

export default function Header() {
  function loadCurrency() {
    setIsLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum&vs_currencies=usd"
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrency(data.usd);
        setIsLoading(false);
      });
  }

  const [currency, setCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    loadCurrency();
  }, []);
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
              price={isLoading ? "loading" : currency}
            />
            <Coins
              icon="https://s2.coinmarketcap.com/static/img/coins/200x200/825.png"
              name="Tether"
              price={isLoading ? "loading" : currency}
              prefix="$"
            />
            <Coins
              icon="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/640px-Ethereum_logo_translucent.svg.png"
              name="Ethereum"
              price={isLoading ? "loading" : currency}
              prefix="$"
            />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}
