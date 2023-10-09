import { styled } from "styled-components";
import { Colors } from "../../App.css";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 1rem 0;
  background-color: ${Colors.light_grey};
`;
export const Link = styled.a`
  text-decoration: none;
`;
