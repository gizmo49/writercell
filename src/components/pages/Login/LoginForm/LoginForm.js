import React from "react";

const LoginForm = () => (
    <>
        <div className="row justify-content-center">
            <div className="col-xl-8">
                <div className="flag--head mb-5">
                    <h2>Create your Account</h2>
                    <p>Enter your name and work email address to proceed</p>
                </div>
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
                    <button className="btn btn--primary">continue</button>
                </form>
            </div>
        </div>
    </>
)

export default LoginForm;