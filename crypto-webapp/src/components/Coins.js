import React from "react";
import { CoinList, Coin, Icon, Name } from "../styles/Coins.style";

export default function Coins({ icon, price, name, prefix }) {
  return (
    <CoinList>
      <Coin>
        <Icon src={icon} />
        <div>
          <h3>
            {prefix} {price}
          </h3>
          <Name>{name}</Name>
        </div>
      </Coin>
    </CoinList>
  );
}
