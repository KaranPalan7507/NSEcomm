import { combineReducers } from "redux";
const INITIAL_STATE = {};

function CountsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_COUNTS":
      return {
        ...state,
        wishlistCount: action.wishlistCount,
        cartCount: action.cartCount
      };
    default:
      return state;
  }
}
export default combineReducers({ CountsReducer });
