import { Fragment } from "react";
import { useSelector } from "react-redux";
import MainHeader from "./MainHeader";
import Notification from "../Notification/Notification";

const Layout = (props) => {
  const notification = useSelector((state) => state.notification);
  return (
    <Fragment>
      {notification.status && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
