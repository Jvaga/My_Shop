import {
  CartButton,
  Container,
  DetailsWrapper,
  FavoriteButton,
  GalleryWrapper,
  InfoWrapper,
  PdfWrapper,
  PrintWrapper,
  Quantity,
  ShopInfoWrapper,
  SpanPrice,
  // SpanSize,
  Title,
  Variants,
  Img,
  InputRadio,
  ImgBuyOptions,
  FavoriteColorWrapper,
  PdfBox,
  PrintBox,
  QuantityWrapper,
  CartButtonWrapper,
  InfoSection,
  InfoSizeWrapper,
  QuantitySpan,
} from "./Card.css";

import { formatCurrency } from "../../../utilities/formatCurrency";

interface CardProps {
  title?: string;
  price?: any;
  img?: any;
}

export const Card = (props: CardProps) => {
  return (
    <Container>
      <GalleryWrapper>
        <Img src="https://c.wallhere.com/photos/73/b4/Daft_Punk_music_artwork-221049.jpg!d" />
      </GalleryWrapper>
      <InfoSection>
        <div>
          <Title>{props.title ? props.title : "Title"}</Title>

          <InfoWrapper>
            {/* <Variants>variante</Variants> */}
            <DetailsWrapper>
              <SpanPrice>
                Pice: {formatCurrency(props.price ? props.price : 10)}
              </SpanPrice>
              <InfoSizeWrapper>
                <div>Width and length:</div>
                <div> 20cm x 50cm</div>
              </InfoSizeWrapper>

              {/* <WrapperFavoriteColor>
            <FavoriteButton>like</FavoriteButton>
          </WrapperFavoriteColor> */}
              <PdfWrapper>
                <PdfBox>
                  <InputRadio type="radio" name="inputRadio" />
                  <ImgBuyOptions
                    src={process.env.PUBLIC_URL + "imgs/svg/pdf.svg"}
                  />
                  <span>PDF</span>
                  <div>directo a tu correo</div>
                </PdfBox>
              </PdfWrapper>
              <PrintWrapper>
                <PrintBox>
                  <InputRadio type="radio" name="inputRadio" />
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
                  <QuantitySpan>Quantity:</QuantitySpan>{" "}
                  <Quantity type="number" defaultValue={1} min={1} />
                </QuantityWrapper>
                <CartButtonWrapper>
                  <CartButton>Add to Cart</CartButton>
                </CartButtonWrapper>
              </ShopInfoWrapper>
            </DetailsWrapper>
          </InfoWrapper>
        </div>
      </InfoSection>
    </Container>
  );
};
