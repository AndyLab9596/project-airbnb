import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// import reducer
import AuthReducer from "./reducers/AuthReducer";
import LocationReducer from "./reducers/LocationReducer";
import SearchReducer from "./reducers/SearchReducer";
import RentRoomsReducer from "./reducers/RentRoomsReducer"
const rootReducer = combineReducers({
  AuthReducer,
  LocationReducer,
  SearchReducer,
  RentRoomsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
