import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartItemsList() {
  const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} {...item} />;
      })}
    </>
  );
}
export default CartItemsList;
