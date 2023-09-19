import { styled } from "styled-components";

export const ProductCard = styled.div`
  width: 380px;
  position: relative;
  box-shadow: 0 2px 7px #b0b0b0;
  margin: 50px auto;
  background: #fafafa;
  border-radius: 10px;
`;

export const Babge = styled.div`
  position: absolute;
  left: 0;
  top: 20px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  background: red;
  color: #fff;
  padding: 3px 10px;
`;
export const ProductTumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  padding: 10px;
  background: #f0f0f0;
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
  color: #ccc;
  margin-bottom: 18px;
`;

export const A = styled.a`
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: #363636;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: #fbb72c;
  }
`;

export const P = styled.p`
  overflow: hidden;
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

export const ProductBottomDetails = styled.div`
  overflow: hidden;
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

export const ProductBottomDetailsDiv = styled.div`
  display: flex;
  width: 50%;
`;

export const ProductPrice = styled.div`
  font-size: 18px;
  color: #fbb72c;
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
  left: 20em;
  width: 200px;
  height: 120px;
`;
export const ProductLinksA = styled.a`
  display: inline-block;
  margin-left: 5px;
  color: #e1e1e1;
  transition: 0.3s;
  font-size: 17px;

  &:hover {
    color: #fbb72c;
  }
`;

export const AddToCartButton = styled.button`
  margin: 1rem 0;
  padding: 0.3rem;
  width: 100%;
  border-radius: 10px;
  border-color: #dfdfdf;
`;

export const QuantityButton = styled.button`
  margin: 0.5rem 0;
  padding: 0.3rem;
  width: 2rem;
  border-radius: 5px;
  border-color: #dfdfdf;
`;

export const RemoveButton = styled.button`
  padding: 0.5rem;

  background-color: red;
  border-radius: 10px;
  border-color: red;
  color: #dfdfdf;
`;
