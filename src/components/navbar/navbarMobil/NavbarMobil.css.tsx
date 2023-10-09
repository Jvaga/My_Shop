import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { Colors } from "../../../App.css";

export const Nav = styled.nav`
  background-color: ${Colors.light_grey};
  color: ${Colors.black};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  @media (min-width: 600px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  font-size: 1.5rem;
`;
export const Logo = styled.img`
  height: 50px;
`;
export const MenuImg = styled.img`
  height: 50px;
  padding: 4px;
  background-color: ${Colors.white};
  border-radius: 50px;
`;

export const Menu = styled.div`
  list-style: none;
  @media (max-width: 600px) {
    align-items: center;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background-color: ${Colors.black};
  }
`;

export const DesktopNavbar = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Page = styled.div`
  text-align: center;
  height: 3rem;
  padding: 1em 0 3em 0;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  color: ${Colors.white};
`;
