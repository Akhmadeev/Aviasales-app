import { combineReducers } from 'redux'; 
import reducer_checkbox from "./reducer_checkbox";
import reducer_request from './reducer_request';

const allRudecesrs = combineReducers({
  checkbox: reducer_checkbox,
  arrayApi: reducer_request,
});

export default allRudecesrs;