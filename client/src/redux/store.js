
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducer";
const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// export const store=createStore(useReducer,compose(applyMiddleware(thunk),devtools))

export const store = createStore(
    userReducer,
  compose(applyMiddleware(thunk), devtools)
);
