import React, {Component} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import "./assets/css/main.css";
import "./assets/css/fonts.css";
import Login from './components/pages/Login/Login';

const hist = createBrowserHistory();

const Home = () => (<h6>home</h6>);
const NotFound = () => (<h1 className="text-center">404 2</h1>);

export default class App extends Component {
  
  render = () => {
    return (
      <>
        <Router history={hist}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="*" render={() => <NotFound />} />
          </Switch>
        </Router>
      </>
    );
  }

}
