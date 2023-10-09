import { styled } from "styled-components";
import { Colors } from "../../App.css";

export const Container = styled.div`
  border: solid 1px ${Colors.black};
  border-radius: 10px;
  padding: 4px;
`;

export const InfoWrapper = styled.div`
  display: flex;
`;

export const ButtomWraper = styled.div`
  width: 150px;
  margin: auto;
  display: flex;
`;

export const SinglePrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
`;

export const Img = styled.img`
  width: 150px;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 8px 6px 12px -1px rgba(0, 0, 0, 0.75);
`;

export const Buttom = styled.button`
  margin: auto auto 10px;
  height: 30px;
  width: 30px;
  border-radius: 10px;
  border: solid 1px ${Colors.black};
`;

export const ProductInfo = styled.div`
  padding: 10px;
  margin: auto;
`;
