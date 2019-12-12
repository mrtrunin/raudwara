import { login as loginApi } from "../../api/api";
import * as jwt from "jsonwebtoken";
import { User } from "./User.model";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../../rootReducer";

export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_SUCCESSFUL = "FETCH_USER_SUCCESSFUL";
export const FETCH_USER_REJECTED = "FETCH_USER_REJECTED";
export const USER_LOGOUT = "USER_LOGOUT";

export const login = (
  username: string,
  password: string
): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
  dispatch({ type: FETCH_USER_PENDING });
  try {
    const { access_token } = await loginApi(username, password);
    localStorage.setItem("jwt", access_token);
    const user: User = access_token ? (jwt.decode(access_token) as User) : {};
    dispatch({ type: FETCH_USER_SUCCESSFUL, payload: user });
  } catch (error) {
    console.log(error);
  }
};

export const logout = (): ThunkAction<
  void,
  RootState,
  null,
  Action<string>
> => async dispatch => {
  dispatch({ type: USER_LOGOUT });
  localStorage.removeItem("jwt");
};
