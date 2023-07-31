import { notificationActions } from "./notification-slice";
import { cartActions } from "./cart-slice";

const sendCartItems = (cart) => {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        status: "sending",
        title: "Pending",
        message: "Updating firebase"
      })
    );
    const sendData = async () => {
      const response = await fetch(
        "https://food-order-app-ac388-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart)
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to send, status: ${response.status}`);
      }
    };
    try {
      await sendData();
      dispatch(
        notificationActions.showNotification({
          status: "success",
          title: "Success",
          message: "Success updating firebase server"
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          status: "error",
          title: "Error",
          message: `Error updating firebase: ${error}`
        })
      );
    }
  };
};

const fetchCart = () => {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        status: "sending",
        title: "Pending",
        message: "Retrieving cart"
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://food-order-app-ac388-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error(`Error retrieving cart status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await sendRequest();
      console.log(`data is ${data}`);
      dispatch(cartActions.replaceCart(data));
      dispatch(
        notificationActions.showNotification({
          status: "success",
          title: "Success",
          message: "Succesfully fetched cart from database"
        })
      );
      return data;
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          status: "error",
          title: "Error",
          message: `Error updating firebase: ${error}`
        })
      );
    }
  };
};

module.exports = {
  sendCartItems,
  fetchCart
};
