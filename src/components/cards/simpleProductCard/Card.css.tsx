import { styled } from "styled-components";
import { breakpoints } from "../../../App.css";
import { Colors } from "../../../App.css";

export const Container = styled.section`
  display: flex;
  width: 80%;
  margin: auto;

  @media (max-width: ${breakpoints.large}) {
    display: block;
    width: 90%;
    margin: auto;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
    margin: auto;
  }
`;

export const GalleryWrapper = styled.div`
  width: 50vw;

  @media (max-width: ${breakpoints.large}) {
    width: 90%;
    margin: auto;
  }

  @media (max-width: ${breakpoints.small}) {
  }
`;

export const InfoSection = styled.div`
  width: 50vw;
  height: fit-content;
  @media (max-width: ${breakpoints.large}) {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  margin: 20px 0 20px 80px;
  @media (max-width: ${breakpoints.large}) {
    margin: 30px auto;
  }
`;
export const InfoWrapper = styled.div`
  background: ${Colors.lighter_grey};
  box-shadow: 0 2px 7px ${Colors.grey};
  border-radius: 5px;
  width: 500px;
  height: fit-content;
  border: solid 1px;
  margin-left: 80px;

  @media (max-width: ${breakpoints.large}) {
    margin: auto;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`;

export const Variants = styled.div``;

export const DetailsWrapper = styled.div`
  padding-top: 30px;
`;

export const SpanPrice = styled.span`
  color: ${Colors.black};
  margin-left: 30px;
`;

export const InfoSizeWrapper = styled.div`
  margin: 20px 30px 20px 30px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const PdfWrapper = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
`;
export const PdfBox = styled.div`
  width: 88%;
  height: 80%;
  margin: auto;

  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
`;

export const PrintWrapper = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
`;

export const PrintBox = styled.div`
  width: 88%;
  height: 80%;
  margin: auto;

  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
`;

export const ShopInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  width: 90%;
  margin: auto;
`;

export const QuantityWrapper = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Quantity = styled.input`
  color: ${Colors.black};
  width: 40px;
  margin-left: 10px;
`;
export const QuantitySpan = styled.span``;

export const CartButtonWrapper = styled.div`
  display: flex;
  width: 55%;
  align-items: center;
  justify-content: end;
`;

export const CartButton = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 5px;

  @media (max-width: ${breakpoints.small}) {
    width: 140px;
  }
`;

export const FavoriteButton = styled.button`
  height: 20px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const InputRadio = styled.input``;

export const ImgBuyOptions = styled.img`
  width: 40px;
`;

export const FavoriteColorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
`;
