import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_APPTS, REMOVE_APPT } from "../actionTypes";

export const loadAppts = appts => ({
  type: LOAD_APPTS,
  appts
});

export const remove = id => ({
  type: REMOVE_APPT,
  id
});

export const fetchAppts = () => {
  return dispatch => {
    return apiCall("GET", "/api/appts")
      .then(res => {
        dispatch(loadAppts(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const addMessage = (user_id, message_id) => {
  return dispatch => {
    return apiCall("post", `/api/users/${user_id}/messages/${message_id}`)
      .then(() => dispatch(remove(message_id)))
      .catch(err => {
        addError(err.message);
      });
  };
};
