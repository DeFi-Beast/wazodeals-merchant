import React from "react";
import { SIGN_IN, LOG_OUT, START_LOADING, END_LOADING, VERIFY_EMAIL } from "../constants";

const authReducers = (state = { Auth: null, isLoading: false, verify:false }, action) => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem("merchant", JSON.stringify(action?.data));
      return { ...state, Auth: action?.data };
    case LOG_OUT:
      console.log("logout");
      localStorage.clear();

      return { ...state, Auth: null };
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case VERIFY_EMAIL:
      return { ...state, verify: true };

    default:
      return state;
  }
};

export default authReducers;
