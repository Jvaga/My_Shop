import { styled } from "styled-components";
import { breakpoints } from "../../../App.css";
import { Colors } from "../../../App.css";

export const ProductCard = styled.div`
  width: 380px;
  position: relative;
  box-shadow: 0 2px 7px ${Colors.grey};

  margin: 50px auto;
  background: ${Colors.lighter_grey};
  border-radius: 10px;

  @media (max-width: ${breakpoints.large}) {
    width: 90%;
  }
`;

export const Babge = styled.div`
  position: absolute;
  left: 0;
  top: 20px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  background: ${Colors.red};
  color: ${Colors.white};
  padding: 3px 10px;
`;
export const ProductTumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  padding: 10px;
  background: ${Colors.lighter_grey};
`;

export const ProductImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ProductDetails = styled.div`
  padding: 30px;
`;

export const ProductCategory = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${Colors.black};
  margin-bottom: 18px;
`;

export const A = styled.a`
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: ${Colors.black};
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: ${Colors.grey};
  }
`;

export const P = styled.p`
  overflow: hidden;
  border-top: 1px solid ${Colors.light_grey};
  padding-top: 20px;
`;

export const ProductBottomDetails = styled.div`
  overflow: hidden;
  border-top: 1px solid ${Colors.light_grey};
  padding-top: 20px;
`;

export const ProductBottomDetailsDiv = styled.div`
  display: flex;
  width: 50%;
`;

export const ProductPrice = styled.div`
  font-size: 18px;
  color: ${Colors.black};
  font-weight: 600;
`;

export const Small = styled.small`
  font-size: 80%;
  font-weight: 400;
  text-decoration: line-through;
  display: inline-block;
  margin-right: 5px;
`;

export const ProductLinks = styled.div`
  position: absolute;
  left: 330px;
  width: 200px;
  height: 120px;
`;
export const ProductLinksA = styled.a`
  display: inline-block;
  margin-left: 5px;
  color: ${Colors.light_grey};
  transition: 0.3s;
  font-size: 17px;

  &:hover {
    color: ${Colors.black};
  }
`;

export const AddToCartButton = styled.button`
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  border-radius: 10px;
  border-color: ${Colors.grey};
`;

export const QuantityButton = styled.button`
  margin: 10px;
  padding: 6px;
  width: 30px;
  border-radius: 5px;
  border-color: ${Colors.grey};
`;

export const RemoveButton = styled.button`
  padding: 10px;

  background-color: ${Colors.red};
  border-radius: 10px;
  border-color: ${Colors.red};
  color: ${Colors.white};
`;
