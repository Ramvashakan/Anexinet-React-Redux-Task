//The required packages is imported
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./users/userReducer";

//PC_RT_08
//Created a new store for entire application
export const store = createStore(userReducer, applyMiddleware(thunk));

//PC_RT_08
//Subcribed to the store
store.subscribe(() => {
  console.log(store.getState());
});
