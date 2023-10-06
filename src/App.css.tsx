import { styled } from "styled-components";

export const AppBody = styled.div`
  /* display: flex; */
  flex-direction: column;
  max-height: 100vh;
  overflow-x: hidden;
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
