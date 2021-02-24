import { All_TRUE, All_FALSE, OTHER_INPUT, API_STORE, SORT_CHEAP, SORT_TIME, ERROR_REQUST } from '../types/types';

export const api_store = (payload) => ({ type: API_STORE, payload });

export const sort_cheap = (payload) => {
  const newArray = payload.sort((a, b) => a.price - b.price);
  return { type: SORT_CHEAP, payload: newArray };
};

export const error_requst = () => ({ type: ERROR_REQUST });

export function requstTickets() {
    return (dispatch) => {
      fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${localStorage.getItem('searchId')}`)
        .then((result) => result.json())
        // .then(res => console.log(res))
        .then((response) => dispatch(sort_cheap(response.tickets)))
        .catch(() => dispatch(error_requst()));
    };
};

export const sort_time = (payload) => {
  const newArray = payload.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
  console.log(newArray);
  return { type: SORT_TIME, payload: newArray };
};

export const other_input = (payload, booleon) => ({ type: OTHER_INPUT, name: payload, bool: booleon });
export const all_true = () => ({ type: All_TRUE });
export const all_false = () => ({ type: All_FALSE });

// export const filterWithoutTransfers = () => ({ type: FILTER_WITHOUT_TRANSFER });
// export const filterOneTransfers = () => ({ type: FILTER_ONE_TRANSFER });
// export const filterTwoTransfers = () => ({ type: FILTER_TWO_TRANSFER });
// export const filterThreeTransfers = () => ({ type: FILTER_THREE_TRANSFER });