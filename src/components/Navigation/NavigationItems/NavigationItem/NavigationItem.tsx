import React from "react";

import './NavigationItem.css';
import {NavLink} from "react-router-dom";

const NavigationItem = (props: any) => {
    return (
        <li className="navItem">
            <NavLink to={props.link} exact>{props.children}</NavLink>
        </li>
    );
}

export default NavigationItem;
