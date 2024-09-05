import { LOGO_URL } from "../Utils/Constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    //let btnName="Login"
    const [btnName, setBtnName]=useState("Login")
    console.log("rendering");


    //if no dependency array=> useeffect is called in every render
    //if empty array [] id given then only once it is called
    useEffect(()=>{
        console.log("useeffect called");
    },[btnName])


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>
                        <Link to="/About"> About Us</Link>
                    </li>
                    {/* <li>about us</li> */}
                    <li>
                        <Link to="/Contact">Contact Us</Link>
                    </li>
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