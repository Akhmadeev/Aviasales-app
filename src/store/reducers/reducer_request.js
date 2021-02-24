import { API_STORE, SORT_CHEAP, SORT_TIME, ERROR_REQUST } from '../types/types';

const reducer_request = (state = [], action) => {

    switch (action.type) {
      case API_STORE:
        return [...state, action.payload];
      case SORT_CHEAP:
        return [...state, action.payload];
      case SORT_TIME:
        return [...state, action.payload];
      case ERROR_REQUST:
        return [
          ...state,
          ['error', 'Попробуйте обовить страницу, сервер не получил данные!'],
          'Попробуйте обовить страницу, сервер не получил данные!',
        ];
      default:
        return state;
    }

}

export default reducer_request;