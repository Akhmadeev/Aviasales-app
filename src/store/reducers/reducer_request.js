import { API_STORE, SORT_CHEAP, SORT_TIME, ERROR_REQUST, ADD_TICKETS } from '../types/types';


const reducer_request = (state = [], action) => {
  switch (action.type) {
    case ADD_TICKETS:
      return {
        0: action.payload,
        stop: action.stop,
      };
    case API_STORE:
      return {
        0: action.payload,
        stop: action.stop,
      };
    case SORT_CHEAP:
      return {
        0: action.payload,
        stop: action.stop,
      };
    case SORT_TIME:
      return {
        0: action.payload,
        stop: action.stop,
      };
    case ERROR_REQUST:
      return [
        ...state,
        ['error', 'Попробуйте обовить страницу, сервер не получил данные!'],
        'Попробуйте обовить страницу, сервер не получил данные!',
      ];
    default:
      return state;
  }
};

export default reducer_request;

