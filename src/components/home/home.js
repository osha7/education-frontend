import React from "react";
import SignIn from "../userAuth/signin";
import { Link } from "react-router-dom";

function home(props) {
    return (
        <div>
            <h1>HOME </h1>
            <SignIn />
            <Link to="/jurisdictions" className="">
                JURISDICTIONS PAGE
            </Link>
            <br />
            <Link to="/standards" className="">
                STANDARDS PAGE
            </Link>
        </div>
    );
}

export default home;
