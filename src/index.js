import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import cartReducer from "./components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(cartReducer);
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
 
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);
