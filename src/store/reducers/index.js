import { combineReducers } from 'redux'; 
import reducer_checkbox from "./reducer_checkbox";
import reducer_request from './reducer_request';
import reducer_id_guest from './reducer_id_guest';

const allRudecesrs = combineReducers({
  checkbox: reducer_checkbox,
  arrayApi: reducer_request,
  id: reducer_id_guest,
});

export default allRudecesrs;