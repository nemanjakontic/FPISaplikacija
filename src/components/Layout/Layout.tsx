import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import './Layout.css';

const Layout = (props: any) => {
    return (
        <>
            <Toolbar />
            <main className="home">
                {props.children}
            </main>
        </>
    );
}

export default Layout;
