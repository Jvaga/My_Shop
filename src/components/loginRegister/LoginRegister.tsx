import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { LogIn } from "../forms/login/Login";
import { Register } from "../forms/register/Register";
import { Formwrapper } from "./LoginRegister.css";
type LoginFromProps = {
  email?: string;
  password?: string;
  name?: string;
};

export const LoginRegister = (props: LoginFromProps) => {
  const emailRef = useRef<HTMLInputElement>();
  const refPas = useRef<HTMLInputElement>();
  const refName = useRef<HTMLInputElement>();
  const refEmaill = useRef<HTMLInputElement>();
  const refPass = useRef<HTMLInputElement>();

  const rutaLogin = "http://localhost:3002/auth/login";
  const rutaRegister = "http://localhost:3002/auth/register";

  const [logIn, setLogin] = useState(true);

  const summitLogIn = async () => {
    let email = emailRef.current?.value;
    let password = refPas.current?.value;

    try {
      const response = await axios.post(rutaLogin, {
        email,
        password,
      });
      console.log("LOGIN", response);

      if (response.data === "USER_DOES_NOT_EXIST") {
        alert("User does not exist");
        // window.location.reload();
      }
    } catch (error) {
      console.log("el error login", error);
      alert("contrasena  esta mal");
      // window.location.reload();
    }
  };

  const summitRegister = async () => {
    let name = refName.current?.value;
    let email = refEmaill.current?.value;
    let password = refPass.current?.value;
    console.log("REGISTER");
    try {
      const response = await axios.post(rutaRegister, {
        name,
        email,
        password,
      });
      if (response.data.valueOf() === "USER_ALREADY_EXISTS") {
        alert("User already exists");
      }

      console.log("registrado exitosamente response", response);
    } catch (error) {
      console.log("el error register", error);
    }
  };

  const toggle = () => {
    logIn ? setLogin(false) : setLogin(true);
  };

  return (
    <>
      <Formwrapper>
        {logIn ? (
          <>
            <LogIn
              onClick={toggle}
              onClickSummit={summitLogIn}
              refEmail={emailRef}
              refPas={refPas}
            />
          </>
        ) : (
          <Register
            onClick={toggle}
            onClickSummit={summitRegister}
            refName={refName}
            refEmaill={refEmaill}
            refPass={refPass}
          />
        )}
      </Formwrapper>
    </>
  );
};
