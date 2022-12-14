import React, { useState } from "react";
import {
  NavBarContainer,
  NavbarInner,
  NavbarExtended,
  LeftContainer,
  RightContainer,
  NavbarLink,
  NavbarLinkContainer,
  Language,
  Hamburger,
  NavbarLinkExtended,
  Logo,
} from "../styles/Nav.style";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Nav() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavBarContainer extendNavbar={extendNavbar}>
      <NavbarInner>
        <LeftContainer>
          <NavbarLinkContainer>
            <Logo src="https://cdn.discordapp.com/attachments/947060629066354689/1008057843494178916/unknown.png" />
            <NavbarLink to="/"> Home </NavbarLink>
            <NavbarLink to="/"> About Us </NavbarLink>
            <NavbarLink to="/"> Features </NavbarLink>
            <NavbarLink to="/"> Market </NavbarLink>
            <Hamburger
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </Hamburger>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Language href="#">EN</Language>
        </RightContainer>
      </NavbarInner>
      {extendNavbar && (
        <NavbarExtended>
          <NavbarLinkExtended to="/"> Home </NavbarLinkExtended>
          <NavbarLinkExtended to="/"> About Us </NavbarLinkExtended>
          <NavbarLinkExtended to="/"> Features </NavbarLinkExtended>
          <NavbarLinkExtended to="/"> Market </NavbarLinkExtended>
        </NavbarExtended>
      )}
    </NavBarContainer>
  );
}
