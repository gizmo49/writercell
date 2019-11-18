import React from "react";

const LoginForm = () => (
    <>
        <form>
            <div className="form-group">
                <label>Full Name</label>
                <input className="form-control" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" />
            </div>
            <button className="btn btn-primary">continue</button>
        </form>
    </>
)

export default LoginForm;