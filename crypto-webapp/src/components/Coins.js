import React from "react";
import { CoinList, Coin, Icon, Name, Price } from "../styles/Coins.style";

export default function Coins({ icon, price, name, prefix }) {
  return (
    <CoinList>
      <Coin>
        <Icon src={icon} />
        <div>
          <Price>
            {prefix} {price}
          </Price>
          <Name>{name}</Name>
        </div>
      </Coin>
    </CoinList>
  );
}
