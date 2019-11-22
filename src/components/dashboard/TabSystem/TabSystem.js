import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavTab } from 'react-router-tabs';
import Icon from '../IconBar/Icon/Icon';
import "./TabSystem.css";

export default ({ routes }) => (
  <>
    <div className="row">
      <div className="col-lg-2">
        <ul className="list-unstyled tabs-ul ">
          {routes.filter(route => route.tab).map(({ path, tab, tabIcon }, i) => (
            <li key={`tab_${i}`} >
              <NavTab to={path}>
                <Icon name={tabIcon} />
                <span>{tab}</span>
              </NavTab>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-lg-10">
        <div className="container-fluid">
          {renderRoutes(routes)}
        </div>
      </div>
    </div>
  </>
);