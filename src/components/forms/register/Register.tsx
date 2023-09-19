import React from "react";
import {
  RegisterSection,
  Button,
  InputRegister,
  Container,
  LabelRegister,
  InputGroup,
} from "./Register.css";

type RegisterFromProps = {
  refName: any;
  refEmaill: any;
  refPass: any;
  onClick: (e: any) => void;
  onClickSummit: (e: any) => void;
};
export const Register = (props: RegisterFromProps) => {
  return (
    <RegisterSection>
      <Container>
        <h3>Register</h3>
      </Container>
      <form>
        <InputGroup>
          <LabelRegister aria-hidden={true} htmlFor="name">
            Name:
          </LabelRegister>
          <InputRegister
            type="text"
            id="name"
            // autoComplete="off"

            ref={props.refName}

            // required
          />
        </InputGroup>
        <InputGroup>
          <LabelRegister htmlFor="email">Email:</LabelRegister>
          <InputRegister
            type="text"
            id="email"
            // autoComplete="off"

            ref={props.refEmaill}
            // required
          />
        </InputGroup>
        <InputGroup>
          <LabelRegister>Password:</LabelRegister>
          <InputRegister
            type="password"
            id="password"
            ref={props.refPass}
            // required
          />
        </InputGroup>
        <Container>
          <Button type="button" onClick={props.onClickSummit}>
            Create Account
          </Button>
        </Container>
      </form>
      <Container>
        <p>
          Do you already have an account?{" "}
          <Button onClick={props.onClick}>Login</Button>
        </p>
      </Container>
    </RegisterSection>
  );
};
