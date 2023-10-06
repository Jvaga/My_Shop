import React from "react";
import {
  ProductCard,
  Babge,
  ProductTumb,
  ProductImg,
  ProductDetails,
  ProductCategory,
  A,
  P,
  ProductBottomDetails,
  ProductPrice,
  Small,
  ProductLinks,
  ProductLinksA,
  ProductBottomDetailsDiv,
  AddToCartButton,
  QuantityButton,
  RemoveButton,
} from "./Card.css";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { formatCurrency } from "../../../utilities/formatCurrency";
import { Link } from "react-router-dom";

type CardProps = {
  _id: number;
  name?: string;
  price?: number;
  img?: string;
  artist?: string;
  description?: string;
  isStore: boolean;
};

export const Card = (props: CardProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  let quantity = getItemQuantity(props._id);
  return (
    <>
      <ProductCard className="product-card">
        <Babge className="badge">Bestseller</Babge>
        <ProductTumb className="product-tumb">
          <ProductImg src={props.img} alt="" />
        </ProductTumb>
        <ProductDetails className="product-details">
          <ProductCategory className="product-catagory">
            {props.artist}
          </ProductCategory>
          <h4>
            <A href="">{props.name}</A>
          </h4>
          <P>{props.description}</P>
          <ProductBottomDetails className="product-bottom-details">
            {props.isStore ? (
              <ProductBottomDetailsDiv>
                <ProductPrice className="product-price">
                  <Small>$96.00</Small>$
                  {formatCurrency(props.price ? props.price : 10)}
                </ProductPrice>

                <ProductLinks className="product-links">
                  <ProductLinksA href="">
                    <i className="fa fa-heart">1</i>
                  </ProductLinksA>
                </ProductLinks>
              </ProductBottomDetailsDiv>
            ) : null}

            <div>
              {props.isStore ? (
                quantity === 0 ? (
                  <AddToCartButton
                    onClick={() => increaseCartQuantity(props._id)}
                  >
                    + Add To Cart
                  </AddToCartButton>
                ) : (
                  <div
                    className="d-flex align-items-center flex-column"
                    style={{ gap: ".5rem" }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ gap: ".5rem" }}
                    >
                      <QuantityButton
                        onClick={() => decreaseCartQuantity(props._id)}
                      >
                        -
                      </QuantityButton>
                      <div>
                        <span className="fs-3">{quantity}</span> in cart
                      </div>
                      <QuantityButton
                        onClick={() => increaseCartQuantity(props._id)}
                      >
                        +
                      </QuantityButton>
                    </div>
                    <RemoveButton onClick={() => removeFromCart(props._id)}>
                      Remove
                    </RemoveButton>
                  </div>
                )
              ) : null}
            </div>
          </ProductBottomDetails>
        </ProductDetails>
      </ProductCard>
    </>
  );
};
