import { styled } from "styled-components";

export const AppBody = styled.div`
  display: flex;
  contain: paint;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
export const breakpoints = {
  small: "600px",
  medium: "900px",
  large: "1200px",
};

export const Colors = {
  black: "#000000",
  light_blue: "#F4F8FD",
  grey: "#b0b0b0",
  light_grey: "#eeeeee",
  lighter_grey: "#FFFFFF",
  red: "#D9000B",
  white: "#ffffff",
};

export const Header = styled.div`
  z-index: 3;
  position: sticky;
  top: 0;
`;

export const FooterWrapper = styled.div`
  margin-top: auto;
`;
