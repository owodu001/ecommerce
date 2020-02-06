import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
          <div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter your password" />
                </div>
                <div className="form-group">
                    <label> Re-enter password</label>
                    <input type="password" className="form-control" placeholder=" Re-enter your password" />
                </div>
                <div className="form-group">
                    <label> Adress </label>
                    <input type="adress" className="form-control" placeholder="Enter your adress" />
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
            </div>
            </div>
        );
    }
}