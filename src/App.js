import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { sendCartItems, fetchCart } from "./store/cart-actions";

function App() {
  const dispatch = useDispatch();
  const cartIsShowing = useSelector((state) => state.cart.cartIsShowing);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartIsChanged = useSelector((state) => state.cart.isChanged);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (cartIsChanged) {
      dispatch(sendCartItems(cartItems));
    }
  }, [dispatch, cartItems, cartIsChanged]);

  return (
    <Layout>
      {cartIsShowing && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
