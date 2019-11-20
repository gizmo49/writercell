import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';
import Icon from "./Icon/Icon";
import routes from "../routes/routes";
import "./IconBar.css"

class IconBar extends Component {

    render = () => {

        return (
            <div className="menu">
                <ul className="list-unstyled">
                    {
                        (routes).map((item, key) => (
                            <li key={key}>
                                <NavLink to={item.path}
                                    className="icon-link"
                                    activeClassName="active">
                                    <Icon name={item.iconName}/>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )

    }

}

export default withRouter(IconBar);