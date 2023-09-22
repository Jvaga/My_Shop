import {
  CartButton,
  Conteiner,
  DetailsWrapper,
  FavoriteButton,
  GalleryWrapper,
  InfoWrapper,
  PdfWrapper,
  PrintWrapper,
  Quantity,
  ShopInfoWrapper,
  SpanPrice,
  SpanSize,
  Title,
  Variants,
  Img,
  ImputRadio,
  ImgBuyOptions,
  WrapperFavoriteColor,
  PdfBox,
  PrintBox,
  QuantityWrapper,
  CartButtonWrapper,
  SpanInfoSize,
} from "./Card.css";

import { formatCurrency } from "../../../utilities/formatCurrency";

interface CardProps {
  title?: string;
  price?: any;
  img?: any;
}

export const Card = (props: CardProps) => {
  return (
    <Conteiner>
      <GalleryWrapper>
        <Img src="https://c.wallhere.com/photos/73/b4/Daft_Punk_music_artwork-221049.jpg!d" />
      </GalleryWrapper>
      <InfoWrapper>
        <Title>{props.title}</Title>
        {/* <Variants>variante</Variants> */}
        <DetailsWrapper>
          <SpanPrice>{formatCurrency(props.price)}</SpanPrice>
          <SpanInfoSize>Width and length:</SpanInfoSize>
          <SpanSize> 20cm x 50cm</SpanSize>

          {/* <WrapperFavoriteColor>
            <FavoriteButton>like</FavoriteButton>
          </WrapperFavoriteColor> */}
          <PdfWrapper>
            <PdfBox>
              <ImputRadio type="radio" name="inputRadio" />
              <ImgBuyOptions
                src={process.env.PUBLIC_URL + "imgs/svg/pdf.svg"}
              />
              <span>PDF</span>
              <div>directo a tu correo</div>
            </PdfBox>
          </PdfWrapper>
          <PrintWrapper>
            <PrintBox>
              <ImputRadio type="radio" name="inputRadio" />
              <ImgBuyOptions
                src={process.env.PUBLIC_URL + "imgs/svg/shippingTruck.svg"}
              />
              <span>Delivery</span>
              <div>delivery: 3 to 5 days </div>
              <div>shipping price: 5 EU</div>
            </PrintBox>
          </PrintWrapper>
          <ShopInfoWrapper>
            <QuantityWrapper>
              Quantity: <Quantity type="number" defaultValue={1} min={1} />
            </QuantityWrapper>
            <CartButtonWrapper>
              <CartButton>Add to Cart</CartButton>
            </CartButtonWrapper>
          </ShopInfoWrapper>
        </DetailsWrapper>
      </InfoWrapper>
    </Conteiner>
  );
};
