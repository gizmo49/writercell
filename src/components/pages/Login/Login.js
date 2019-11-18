import React, { Component } from "react";
import LoginForm from "./LoginForm/LoginForm";
import "../Login/Login.css";

export default class Login extends Component {

    render = () => {
        return (
            <>
                <div className="login--view">
                    <div className="row h-100 w-100">
                        <div className="col-lg-6">
                            <div className=""></div>
                        </div>
                        <div className="col-lg-6">
                            <h6>login</h6>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
