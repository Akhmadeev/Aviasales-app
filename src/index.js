import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allRudecesrs from "./store/reducers";
import App from "./Components/App/App";


const store = createStore(allRudecesrs);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
