import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const LogoWrapper = styled.div`
  font-size: 1.5rem;
`;
export const Logo = styled.img`
  height: 50px;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
`;

export const MenuItem = styled.li`
  margin-right: 1rem;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
