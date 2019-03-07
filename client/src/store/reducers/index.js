import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import messages from "./messages";
import appts from "./appts";
import doctors from "./doctors";

const rootReducer = combineReducers({
  currentUser,
  errors,
  messages,
  appts,
  doctors
});

export default rootReducer;
