// import { Link } from "react-router-dom";
import {
  Nav,
  Link,
  Logo,
  MenuImg,
  Page,
  LogoWrapper,
  Menu,
} from "./NavbarMobil.css";
import { useState } from "react";

export const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const afterClik = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Nav>
      <LogoWrapper>
        <Logo
          src={process.env.PUBLIC_URL + "/imgs/svg/logo.svg"}
          alt="paypal-icone"
        />{" "}
        My Shop
      </LogoWrapper>

      <div onClick={toggleMenu}>
        <MenuImg src={process.env.PUBLIC_URL + "/imgs/svg/menu.svg"} />
      </div>
      {isOpen ? (
        <Menu className="menu">
          <Page>
            <Link to="/" onClick={afterClik}>
              Home
            </Link>
          </Page>
          <Page>
            <Link to="/store">Store</Link>
          </Page>
          <Page>
            <Link to="/about">Our Artist</Link>
          </Page>
          <Page>
            <Link to="/login">Login</Link>
          </Page>
        </Menu>
      ) : null}
    </Nav>
  );
};
