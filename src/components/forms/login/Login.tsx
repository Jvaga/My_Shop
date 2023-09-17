import React from "react";
import {
  LogInSection,
  InputGroup,
  InputLogin,
  LabelLogin,
  Container,
  Button,
} from "./Login.css";

type LogInProps = {
  refEmail: any;
  refPas: any;
  onClick: (e: any) => void;
  onClickSummit: (e: any) => void;
};

export const LogIn = React.forwardRef((props: LogInProps) => {
  return (
    <>
      <LogInSection>
        <Container>
          <h3>Login</h3>
        </Container>
        <form>
          <InputGroup>
            <LabelLogin htmlFor="email">Email:</LabelLogin>

            <InputLogin
              type="text"
              id="email"
              // autoComplete="off"
              // required
              ref={props.refEmail}
            />
          </InputGroup>
          <InputGroup>
            <LabelLogin>Password:</LabelLogin>
            <InputLogin
              type="password"
              id="password"
              // required
              ref={props.refPas}
            />
          </InputGroup>
          <Container>
            <Button type="button" onClick={props.onClickSummit}>
              login
            </Button>
          </Container>
        </form>
        <Container>
          <p>
            necesita una cuenta?{" "}
            <button onClick={props.onClick}>crear cuenta</button>
          </p>
        </Container>
      </LogInSection>
    </>
  );
});
