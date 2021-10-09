import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// import reducer
import authReducer from './reducers/Auth'

const rootReducer = combineReducers({
    authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;