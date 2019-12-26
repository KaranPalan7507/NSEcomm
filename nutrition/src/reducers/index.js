import { combineReducers } from "redux";
import { CountsReducer } from "./CountsReducer";
export default combineReducers({ counts: CountsReducer });
