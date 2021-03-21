import {
  All_TRUE,
  All_FALSE,
  OTHER_INPUT,
  API_STORE,
  SORT_CHEAP,
  SORT_TIME,
  ADD_TICKETS,
  ADD_ID,
} from '../types/actionTypes';

export const api_store = (payload) => ({ type: API_STORE, payload });

export const get_id_session = (id) => ({ type: ADD_ID, id });

export const sort_cheap_tickets = (payload, stop) => {
  const newArray = payload.sort((prev, next) => prev.price - next.price);
  return { type: SORT_CHEAP, payload: newArray, stop };
};

export const add_tickets = (payload, stop) => ({ type: ADD_TICKETS, payload, stop });


export const sort_time_fast_tickets = (payload, stop) => {
  const newArray = payload.sort((prev, next) => prev.segments[0].duration - next.segments[0].duration);
  return { type: SORT_TIME, payload: newArray, stop };
};

export const change_other_input = (payload, booleon) => ({ type: OTHER_INPUT, name: payload, bool: booleon });
export const all_filter_on = () => ({ type: All_TRUE });
export const all_filter_off = () => ({ type: All_FALSE });

