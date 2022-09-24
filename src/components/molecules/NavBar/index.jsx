import React from "react";
import { Link } from "react-router-dom";

export const NavBar =() => {
    return (
        <div className="body">
            <nav>
        <div className="logo">
        </div>

        <div className="nav-list">
            <Link to="/history">History</Link>
            <Link to="/ginuwa">The Ginuwa Ruling House</Link>
            <Link to="/warri">Warri Traditional Council</Link>
            <Link to="/royal">Royal Court Notices</Link>
        </div>
        </nav>
        </div>
    );
};