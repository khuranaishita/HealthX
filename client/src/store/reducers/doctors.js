import { LOAD_DOCTORS } from "../actionTypes";

const doc = (state = [], action) => {
  switch (action.type) {
    case LOAD_DOCTORS:
      return state.filter(doc => doc._id === action.id);
    default:
      return state;
  }
};

export default doc;
