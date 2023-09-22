import { styled } from "styled-components";

export const Conteiner = styled.section`
  /* background-color: aliceblue; */
  margin: 5rem;
  display: flex;
`;
export const GalleryWrapper = styled.div`
  /* background-color: blue; */
  width: 50%;
  margin: auto;
`;
export const InfoWrapper = styled.div`
  /* background-color: red; */
  width: 50%;
  padding: 1rem 4rem 1rem 2rem;
  border: solid 1px;
  margin-left: 4em;
`;

export const Title = styled.h1`
  color: gray;
`;

export const Variants = styled.div`
  /* background-color: yellowgreen; */
`;
export const DetailsWrapper = styled.div`
  /* background-color: antiquewhite; */
  padding-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px 50px 1fr 1fr 60px;
  gap: 0px 0px;
  grid-template-areas:
    "precio . favorite"
    "sizeinfo size ."
    "pdf pdf pdf"
    "print print print"
    "shopinfo shopinfo shopinfo";
`;
export const SpanPrice = styled.span`
  color: black;
  grid-area: precio;
  padding-left: 2em;
`;
export const SpanSize = styled.span`
  color: black;
  grid-area: size;
`;
export const SpanInfoSize = styled.span`
  grid-area: sizeinfo;
  padding-left: 2em;
`;

export const PdfBox = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 1em;
`;
export const PdfWrapper = styled.div`
  /* background-color: yellow; */
  grid-area: pdf;
  padding: 1.5em 2em 1em;
`;
export const PrintWrapper = styled.div`
  /* background-color: azure; */
  grid-area: print;
  padding: 1.5em 2em 1em;
`;
export const PrintBox = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 1em;
`;
export const ShopInfoWrapper = styled.div`
  /* background-color: bisque; */
  grid-area: shopinfo;
  display: flex;
`;

export const Quantity = styled.input`
  color: black;
  width: 3rem;
  margin-left: 0.5rem;
`;

export const CartButton = styled.button`
  /* background-color: green; */
  width: 15.5rem;
`;
export const QuantityWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  padding-left: 2rem;
`;
export const CartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FavoriteButton = styled.button`
  /* background-color: violet; */
  height: 2rem;
`;
export const Img = styled.img`
  width: 100%;
`;
export const ImputRadio = styled.input``;
export const ImgBuyOptions = styled.img`
  width: 40px;
`;
export const WrapperFavoriteColor = styled.div`
  grid-area: favorite;
  display: flex;
  justify-content: end;
  margin-right: 1rem;
`;
