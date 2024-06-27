import { LOGO_URL } from "../Utils/Constants";
import { useState } from "react";

const Header=()=>{
    //let btnName="Login"
    const [btnName, setBtnName]=useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>about us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button onClick={()=>{
                        btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")
                        console.log(btnName)}} className="Login-btn">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;