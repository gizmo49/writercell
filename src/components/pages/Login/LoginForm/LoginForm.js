import React from "react";
import FlagHead from "../../../utils/FlagHead/FlagHead";

const LoginForm = () => (
    <>
        <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-8">
                <FlagHead title="Create your Account" summary="Enter your name and work email address to proceed" />
                <form className="form--primary">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input name="fullname"
                            className="form-control input--primary"
                            placeholder="Joseph Alabi" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email"
                            className="form-control input--primary"
                            placeholder="jonsnow@games.com" />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn--primary">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    </>
)

export default LoginForm;