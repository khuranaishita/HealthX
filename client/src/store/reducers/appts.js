import { LOAD_APPTS, REMOVE_APPT } from "../actionTypes";

const appt = (state = [], action) => {
  switch (action.type) {
    case LOAD_APPTS:
      return [...action.appts];
    case REMOVE_APPT:
      return state.filter(appt => appt._id !== action.id);
    default:
      return state;
  }
};

export default appt;
