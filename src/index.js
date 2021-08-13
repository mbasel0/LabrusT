import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import history from "./utils/history";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import { ConnectedRouter } from "connected-react-router";

const initialState = {};

const store = configureStore(initialState, history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
