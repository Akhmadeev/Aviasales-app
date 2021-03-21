import { ADD_ID } from '../types/actionTypes';


const reducer_id_guest = (state = '', action) => {
  switch (action.type) {
    case ADD_ID:
      return action.id;
    default:
      return state;
  }
};

export default reducer_id_guest;

