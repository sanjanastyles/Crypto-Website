import styled from "styled-components";

export const CoinList = styled.div`
  display: flex;
  align-items: center;
`;

export const Coin = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
  padding: 10px 10px;

  @media only screen and (max-width: 1350px) {
    font-size: 0.8rem;
    padding: 1px 1px;
  }
`;

export const Icon = styled.img`
  width: 40px;
  margin-right: 10px;

  @media only screen and (max-width: 1350px) {
    width: 20px;
  }
`;
export const Name = styled.p`
  color: #ffccd5d8;
  font-weight: 550;
`;
