import { createStore, applyMiddleware } from "redux";
import peopleReducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(peopleReducers, applyMiddleware(thunk));

export default store;