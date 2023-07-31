import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartButtonClickHandler = () => {
    dispatch(cartActions.toggleCartIsShowing());
  };
  return (
    <button className={classes.button} onClick={cartButtonClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
