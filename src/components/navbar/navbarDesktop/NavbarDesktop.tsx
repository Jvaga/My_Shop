import {
  NavbarContainer,
  Menu,
  MenuItem,
  MenuLink,
  Logo,
  LogoWrapper,
} from "./NavbarDesktop.css";

export const NavbarDesktop = () => {
  return (
    <NavbarContainer>
      <LogoWrapper>
        <Logo
          src={process.env.PUBLIC_URL + "/imgs/svg/logo.svg"}
          alt="paypal-icone"
        />{" "}
        My Shop
      </LogoWrapper>
      <Menu>
        <MenuItem>
          <MenuLink to="/">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/store">Store</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/about">Our Artist</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/login">Login</MenuLink>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
};
