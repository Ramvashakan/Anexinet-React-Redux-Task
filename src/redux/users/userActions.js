//The required packages is imported
import axios from "axios";
import { UPDATE_USER_SUCCESS } from "./types";

// This function is called when the user data is updated successfully
export const updateUserSuccess = (message) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: message,
  };
};

//PC_RT_06
//In this method the user data is updated using axios put call and the dispatch is been returned
export const updateUsers = () => {
  let userData = {
    name: "trail",
    email: "trail@sample.com",
    gender: "male",
    status: "active",
  };
  let headers = {
    Authorization:
      "Bearer 80c268372ab26dc81edc905154523fbc0c071d5f4a2d0f1008e8a75cdf716ba3",
  };
  return (dispatch) => {
    axios
      .put("https://gorest.co.in/public/v2/users/2879", userData, { headers })
      .then((response) => {
        if (response.status == 200) {
          dispatch(updateUserSuccess("sucessful"));
        }
      })
      .catch((error) => {
        const errorMessage = error.mesage;
      });
  };
};
