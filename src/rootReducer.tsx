import { combineReducers } from "redux";
import user from "./components/User/UserReducer";

let rootReducer = combineReducers({
  user
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
