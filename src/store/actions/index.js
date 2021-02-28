import {
  All_TRUE,
  All_FALSE,
  OTHER_INPUT,
  API_STORE,
  SORT_CHEAP,
  SORT_TIME,
  ERROR_REQUST,
  ADD_TICKETS,
} from '../types/types';

export const api_store = (payload) => ({ type: API_STORE, payload });

export const sort_cheap = (payload, stop) => {
  const newArray = payload.sort((value1, value2) => value1.price - value2.price);
  return { type: SORT_CHEAP, payload: newArray, stop };
};

export const error_requst = () => ({ type: ERROR_REQUST });

export const add_tickets = (payload, stop) => ({ type: ADD_TICKETS, payload, stop });

// export function requestTickets() {
//   return () => {
//     fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${localStorage.getItem('searchId')}`)
//       .then((result) => result.json())
//       .then((response) => {
//         if (!response.stop) {
          
//           console.log(response.stop);
//           requestTickets();
//           // dispatch(add_tickets(response.tickets, response.stop));
//         }
//         console.log(response.stop);
//       })
//       .catch(() => requestTickets());
//   };
// }


export const sort_time = (payload, stop) => {
  const newArray = payload.sort((value1, value2) => value1.segments[0].duration - value2.segments[0].duration);
  return { type: SORT_TIME, payload: newArray, stop };
};

export const other_input = (payload, booleon) => ({ type: OTHER_INPUT, name: payload, bool: booleon });
export const all_true = () => ({ type: All_TRUE });
export const all_false = () => ({ type: All_FALSE });

// export const filterWithoutTransfers = () => ({ type: FILTER_WITHOUT_TRANSFER });
// export const filterOneTransfers = () => ({ type: FILTER_ONE_TRANSFER });
// export const filterTwoTransfers = () => ({ type: FILTER_TWO_TRANSFER });
// export const filterThreeTransfers = () => ({ type: FILTER_THREE_TRANSFER });
