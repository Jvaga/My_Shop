import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Colors } from "../../../App.css";

export const NavbarContainer = styled.nav`
  background-color: ${Colors.light_grey};
  color: ${Colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const LogoWrapper = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img`
  height: 50px;
`;

export const Menu = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.div`
  margin-right: 1rem;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.black};
`;
