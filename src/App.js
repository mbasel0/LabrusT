import "./App.css";
import React from "react";
import { BrowserRouter as  Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import Spinner from "./Components/Spinner";
import history from "./utils/history";
import Login from "./Pages/Login"
import Panel  from "./Pages/Panel";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/panel">
              <Panel/>
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </ConnectedRouter>
        <Spinner />
      </div>
    );
  }
}

export default App;
