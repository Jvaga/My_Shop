import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useData } from "../context/ContextItems";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

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
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.img}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt={""}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item._id)}
      >
        &times;
      </Button>
      <button onClick={() => decreaseCartQuantity(item._id)}>-</button>
      <button onClick={() => increaseCartQuantity(item._id)}>+</button>
    </Stack>
  );
}
