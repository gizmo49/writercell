import React, { Component } from "react";
import { NavLink, withRouter, Link } from 'react-router-dom';
import Icon from "./Icon/Icon";
import routes from "../routes/routes";
import "./IconBar.css";

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
                                    <Icon name={item.iconName} />
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div className="bottomActions">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="icon-link">
                                <Icon name="search" />
                            </Link>
                        </li>
                        <li>
                            <Link className="icon-link">
                                <Icon name="question-mark" />
                            </Link>
                        </li>
                        <li>
                            <Link className="icon-link">
                                <Icon name="logout" />
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        )

    }

}

export default withRouter(IconBar);