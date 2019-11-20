import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
// import IconBar from "../iconbar";
import routes from "../routes/routes";
import IconBar from "../IconBar/IconBar";

const NotFound = () => (<h6 className="text-center">404</h6>);

const hist = createBrowserHistory();

class Dashbase extends Component {

    componentDidMount = () =>  document.body.style.background = "#FDFDFE";

    render = () => {

        return (
            <>
                <Router history={hist}>
                    <>
                        <IconBar />
                        <div id="content">
                            <Switch>
                                {RoutesWithSubRoutes(routes)}
                                <Route exact path="*" render={() => <NotFound />} />
                            </Switch>
                        </div>
                    </>
                </Router>
            </>
        )

    }

}

const RoutesWithSubRoutes = routes =>
    routes.map((route, i) => (
        <Route
            key={i}
            exact={route.exact || false}
            path={route.path}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    ));


export default Dashbase;