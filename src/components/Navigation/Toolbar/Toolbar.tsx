import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";

import './Toolbar.css';

const Toolbar = (props: any) => {
    return (
        <>
            <header className="header">
                <nav className="desktopOnly">
                    <NavigationItems />
                </nav>
            </header>
        </>
    );
}

export default Toolbar;
