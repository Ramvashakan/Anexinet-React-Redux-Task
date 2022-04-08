//The required packages is imported
import { UPDATE_USER_SUCCESS } from "./types";

//Initial state of the response
const initalState = {
  response: "",
};

//PC_RT_07
//This is the reducer for the user
const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
      return {
        response: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
