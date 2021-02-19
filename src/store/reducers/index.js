import { combineReducers } from 'redux'; 
import reducer_checkbox from "./reducer_checkbox";

const allRudecesrs = combineReducers({
  checkbox: reducer_checkbox,
});

export default allRudecesrs;