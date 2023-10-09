import { styled } from "styled-components";
import { Colors } from "../../../App.css";

export const RegisterSection = styled.section`
  width: 320px;
  border-radius: 10px;
  background-color: ${Colors.light_grey};
  padding: 30px;
  color: ${Colors.black};
  border: solid 1px ${Colors.black};
`;
export const Container = styled.div`
  text-align: center;
`;

export const InputGroup = styled.div`
  margin-top: 20px;
  font-size: 15px;
`;
export const LabelRegister = styled.label`
  display: block;
  color: ${Colors.black};
  margin-bottom: 4px;
`;
export const InputRegister = styled.input`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${Colors.grey};
  outline: 0;
  background-color: ${Colors.white};
  padding: 15px 10px;
  color: ${Colors.black};
`;

export const Formwrapper = styled.div`
  display: grid;
  place-items: center;
`;
export const Button = styled.button`
  margin: 10px;
  padding: 10px;
  border: 1px solid ${Colors.black};
  border-radius: 10px;
`;
