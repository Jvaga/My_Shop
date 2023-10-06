import { styled } from "styled-components";
import { Colors } from "../../../App.css";
export const LogInSection = styled.section`
  width: 320px;
  border-radius: 0.75rem;
  background-color: ${Colors.light_grey};
  padding: 2rem;
  color: ${Colors.black};
`;

export const InputGroup = styled.div`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
export const LabelLogin = styled.label`
  display: block;
  color: ${Colors.black};
  margin-bottom: 4px;
`;
export const InputLogin = styled.input`
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid ${Colors.grey};
  outline: 0;
  background-color: ${Colors.white};
  padding: 0.75rem 1rem;
  color: ${Colors.black};
`;

export const Button = styled.button`
  margin: 1em;
`;
export const Container = styled.div`
  text-align: center;
`;
