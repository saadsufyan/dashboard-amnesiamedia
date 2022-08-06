import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import './layout.css'
const Layout = ({children})=> {
    return(
        <div className="layout__container">
            <Sidebar/>
            <div className="right_side_container">
                {children}
            </div>
        </div>
    )
}

export default Layout