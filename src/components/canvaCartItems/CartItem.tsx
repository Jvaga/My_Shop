import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useData } from "../../context/ContextItems";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../../utilities/formatCurrency";
import { Container, InfoWrapper } from "./CartItems.css";
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
        <img
          src={item.img}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
          alt={""}
        />
        <div>
          <div>{item.name}</div>
          <div>Quantity: {quantity > 1 && <span>{quantity}</span>}</div>
          <div>{formatCurrency(item.price * quantity)}</div>
        </div>
      </InfoWrapper>
      <InfoWrapper>
        <div>unidad: {formatCurrency(item.price)}</div>

        <div>
          <button onClick={() => removeFromCart(item._id)}>&times;</button>
          <button onClick={() => decreaseCartQuantity(item._id)}>-</button>
          <button onClick={() => increaseCartQuantity(item._id)}>+</button>
        </div>
      </InfoWrapper>
    </Container>
  );
}
