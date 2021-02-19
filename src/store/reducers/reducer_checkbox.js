import { All_TRUE, All_FALSE, OTHER_INPUT } from "../types/types";

const check_bokses = {
  all: false,
  withoutTransfers: false,
  oneTransfers: false,
  twoTransfers: false,
  threeTransfers: false,
};

const reducer_checkbox = (state = check_bokses, action) => {
  switch (action.type) {
    case All_TRUE:
      return {
        ...state,
        all: true,
        withoutTransfers: true,
        oneTransfers: true,
        twoTransfers: true,
        threeTransfers: true,
      };
    case All_FALSE:
      return {
        ...state,
        all: false,
        withoutTransfers: false,
        oneTransfers: false,
        twoTransfers: false,
        threeTransfers: false,
      };
    case OTHER_INPUT:
      return {
        ...state,
        // all: action.bool,
        [action.name]: action.bool,
      };
    default:
      return state;
  }
};

export default reducer_checkbox;