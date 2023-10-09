import { styled } from "styled-components";
import { Colors, breakpoints } from "../../App.css";

export const Container = styled.section`
  height: 92vh;
  opacity: 90%;
  /* display: flex; */
  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1582174543967-f059e6f4f7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80");
  @media (max-width: ${breakpoints.medium}) {
    height: 92vh;
    display: block;
  }
`;
export const Wrapper = styled.div`
  transform: perspective(900px) rotateY(25deg) scale(0.9) rotateX(10deg);
  box-shadow: 10px 10px 20px 10px ${Colors.black};
  height: 500px;
  border-radius: 10px;

  @media (max-width: ${breakpoints.medium}) {
    transform: perspective(500px) rotateY(25deg) scale(0.9) rotateX(10deg);
  }

  @media (max-width: ${breakpoints.small}) {
    transform: perspective(400px) rotateY(25deg) scale(0.9) rotateX(10deg);
    height: 300px;
  }
`;

export const Title = styled.h1`
  color: ${Colors.white};
  font-size: 70px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 30vh 8vw 0 10vw;
  text-transform: uppercase;
  box-shadow: 10px 10px 20px 5px ${Colors.black};
  border-radius: 10px;

  @media (max-width: ${breakpoints.medium}) {
    font-size: 34px;
    padding: 20vh 0 0 5vw;
  }
  @media (max-width: ${breakpoints.small}) {
    font-size: 34px;
    padding: 10vh 0 0 5vw;
    height: 150px;
  }
`;

export const Text = styled.p`
  color: ${Colors.white};
  font-size: 26px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 5vh 0 0 10vw;
  border-radius: 10px;

  @media (max-width: ${breakpoints.small}) {
    font-size: 20px;
    padding: 4vh 0 0 5vw;
  }
`;
