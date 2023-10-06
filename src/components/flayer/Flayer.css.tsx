import { styled } from "styled-components";
import { Colors } from "../../App.css";

export const Container = styled.section`
  height: 87vh;
  opacity: 90%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1582174543967-f059e6f4f7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80");
`;

export const Title = styled.h1`
  color: ${Colors.white};
  font-size: 70px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 30vh 0 0 10vw;
`;

export const Text = styled.p`
  color: ${Colors.white};
  font-size: 20px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 1vh 0 0 10vw;
`;
