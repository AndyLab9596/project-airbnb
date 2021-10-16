import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// import reducer
import AuthReducer from "./reducers/AuthReducer";
import ListRoomReducer from "./reducers/ListRoomReducer";

const rootReducer = combineReducers({
  AuthReducer,
  ListRoomReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
