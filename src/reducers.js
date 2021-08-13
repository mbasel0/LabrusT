import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "./utils/history";

import loginReducer from "./Pages/Login/reducer";
import spinnerReducer from "./Components/Spinner/reducer";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    login: loginReducer,
    spinner: spinnerReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });
  return rootReducer;
}
