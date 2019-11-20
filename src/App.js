import React, {Component} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Login from './components/pages/Login/Login';
import Dashbase from './components/dashboard/Dashbase/Dashbase';
import "./assets/css/main.css";
import "./assets/css/fonts.css";

const hist = createBrowserHistory();

const NotFound = () => (<h1 className="text-center">404 2</h1>);

export default class App extends Component {
  
  render = () => {
    return (
      <>
        <Router history={hist}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route component={Dashbase} />
            <Route exact path="*" render={() => <NotFound />} />
          </Switch>
        </Router>
      </>
    );
  }

}
