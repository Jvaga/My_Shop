import { styled } from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: auto;
  right: 4vw;
  top: 90vh;
  z-index: 3;
`;

export const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50px;
  color: black;
  border-color: black;
  padding: 10px;
  border: solid 3px;
`;

export const Quantity = styled.div`
  color: white;
  background-color: red;
  border-radius: 50px;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  transform: translate(25%, 25%);
  bottom: 0;
  right: 0;
`;
