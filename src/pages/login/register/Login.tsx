import React from "react";
import { LoginRegister } from "../../../components/loginRegister/LoginRegister";
import { Container, Logo, LogoWrapper } from "./Login.css";

export const Login = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo
          src={process.env.PUBLIC_URL + "/imgs/svg/logo.svg"}
          alt="paypal-icone"
        />{" "}
        My Shop
      </LogoWrapper>
      <LoginRegister />
    </Container>
  );
};
