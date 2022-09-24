import React from "react";
import "./index.css";

export const Login = () => {
    return (
        <div className="account-details">
            <div className="login-img"></div>
            <div className="login-details">
                <div className="info">
                    <h1 className="mt-64">Login</h1>
                    <p>Your details are kept safe and with it you can always gain access!</p>
                    <div className="search-text">
                    <input className="mb-16 w-100 h-50" type="text" placeholder="email" />
                    <input className="mb-16 w-100 h-50" type="text" placeholder="password" />
                    <div>
                    <button className="btn mb-16">Login</button>
                    <p className="tc">Not Registered? Sign Up</p>
                    </div>
                    </div>

                    <div>
                        <button className="btn2">Change password</button>
                    </div>
                </div>
            </div>
        </div>
    )
};