import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useData } from "../../context/ContextItems";
import { formatCurrency } from "../../utilities/formatCurrency";
import {
  Container,
  InfoWrapper,
  SinglePrice,
  ButtomWraper,
  Img,
  Buttom,
  ProductInfo,
} from "./CartItems.css";
type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem(props: CartItemProps) {
  // const { removeFromCart } = useShoppingCart();
  const data = useData();
  // console.log("cartItem-->", data.data);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  let quantity = getItemQuantity(props.id);

  const item = data.data?.find((i) => i._id === props.id);

  if (item == null) return null;

  return (
    <Container>
      <InfoWrapper>
        <Img src={item.img} />
        <ProductInfo>
          <div>{item.name}</div>
          <div>Quantity: {quantity > 0 && <span>{quantity}</span>}</div>
          <div>Total price: {formatCurrency(item.price * quantity)}</div>
        </ProductInfo>
      </InfoWrapper>
      <InfoWrapper>
        <SinglePrice>unidad: {formatCurrency(item.price)}</SinglePrice>

        <ButtomWraper>
          <Buttom onClick={() => decreaseCartQuantity(item._id)}>-</Buttom>
          <Buttom onClick={() => increaseCartQuantity(item._id)}>+</Buttom>
          <Buttom onClick={() => removeFromCart(item._id)}>&times;</Buttom>
        </ButtomWraper>
      </InfoWrapper>
    </Container>
  );
}
