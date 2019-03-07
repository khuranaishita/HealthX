import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_DOCTORS } from "../actionTypes";

export const loadDoctors = doctor => ({
  type: LOAD_DOCTORS,
  doctor
});

export const fetchDoctor = message_id => {
  return dispatch => {
    return apiCall("get", `/api/doctors/${message_id}`)
      .then(res => {
        dispatch(loadDoctors(res));
      })
      .catch(err => {
        addError(err.message);
      });
  };
};
