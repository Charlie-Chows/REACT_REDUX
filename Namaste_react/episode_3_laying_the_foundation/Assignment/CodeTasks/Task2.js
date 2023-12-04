/**
 * TASK 2 :: CREATE HEADER COMPONENT AND ADD 
 *             - LOGO
 *             - SEARCH BAR
 *             - USER ICON
 */

import React from "react";
import  ReactDOM  from "react-dom/client";
import logo from "../assets/logo.png";
import "./Task2.css";
const Header = () => {
    return (
        <div>
            <div className="header">
            <div>
                <img className="logo" src={logo} alt="logo" />
            </div>

            <div className="searchBar">
                <input type="text" className="search" placeholder="search" />
                <button type="button" className="searchBtn">Search</button>
            </div>

            <div>
            <img className="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU" alt="user" />
            </div>
            </div>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);




