import { createStore, applyMiddleware } from "redux";
import reducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import { logger } from "redux-logger";
import { apiMiddleware } from "redux-api-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

const persistedState = localStorage.getItem("state")
  ? JSON.parse(localStorage.getItem("state") as string)
  : undefined;

const middlewares = [apiMiddleware, thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const middleware = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducer, persistedState, middleware);

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});

export default store;
