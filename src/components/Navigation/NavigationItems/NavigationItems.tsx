import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import './NavigationItems.css';

const NavigationItems = (props: any) => {
    return (
        <>
            <ul className="navItems">
                <NavigationItem link="/">POČETNA</NavigationItem>
                <NavigationItem link="/clanovi/novi">NOVI ČLAN</NavigationItem>
            </ul>
        </>
    );
}

export default NavigationItems;
