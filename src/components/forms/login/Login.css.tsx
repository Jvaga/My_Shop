import { styled } from "styled-components";
import { Colors } from "../../../App.css";

export const LogInSection = styled.section`
  width: 320px;
  border-radius: 10px;
  background-color: ${Colors.light_grey};
  padding: 30px;
  border: 1px solid ${Colors.black};
  color: ${Colors.black};
`;

export const InputGroup = styled.div`
  margin-top: 20px;
  font-size: 15px;
`;
export const Container = styled.div`
  text-align: center;
`;
export const LabelLogin = styled.label`
  display: block;
  color: ${Colors.black};
  margin-bottom: 4px;
`;
export const InputLogin = styled.input`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${Colors.grey};
  outline: 0;
  background-color: ${Colors.white};
  padding: 15px 10px;
  color: ${Colors.black};
`;

export const Button = styled.button`
  margin: 10px;
  padding: 10px;
  border: 1px solid ${Colors.grey};
  border-radius: 10px;
`;
