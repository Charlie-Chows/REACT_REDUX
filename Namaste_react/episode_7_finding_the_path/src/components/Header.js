import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = ()=>{
    const [btnName,setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    {/* TOGGLE FUNCTIONALITY OF LOGIN / LOGOUT BUTTON */}
                    <button className="login" onClick={()=>{btnName === "Login" ? setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;