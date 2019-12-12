import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../User/UserActions";
import { RootState } from "../../rootReducer";

const Logout = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  if (Object.keys(user).length !== 0) {
    dispatch(logout());
  }
  return <div>Logout</div>;
};

export default Logout;
