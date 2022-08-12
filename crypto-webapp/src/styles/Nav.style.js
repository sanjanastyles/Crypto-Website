import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: ${(props) => props.extendNavbar && "100vh"};
  padding: 1% 7%;
  background-color: #7de0d0;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
`;
export const NavbarInner = styled.div`
  width: 100%;
  align-items: center;
  font-weight: 700;
  display: flex;
`;

export const NavbarExtended = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-decoration: none;
  margin: 10px;
`;

export const Language = styled.a`
  align-items: center;
  display: flex;
  background: #a6ebdf;
  text-decoration: none;
  border: 1px solid;
  padding: 10px 30px;
  border-radius: 20px;
`;

export const Hamburger = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;
