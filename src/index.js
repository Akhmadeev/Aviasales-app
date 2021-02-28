import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import allRudecesrs from "./store/reducers";
import App from "./Components/App/App";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const loggerMiddleware = () => (next) => (action) => {
  const result = next(action);
  return result;
};


const store = createStore(allRudecesrs, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)));

 // const store = createStore(allRudecesrs);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));