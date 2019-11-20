import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';
// import {Icon} from "../icons";
import routes from "../routes/routes";

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
                                    {/* <Icon name={item.iconName}/> */}
                                    <span>{item.iconName}</span>
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