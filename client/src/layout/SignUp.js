import React, { Component } from "react";

export default class SignUp extends Component {
        constructor() {
          super();
          this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
          };
        }
      
    onChange = e => {
          this.setState({ [e.target.id]: e.target.value });
        };
      onSubmit = e => {
          e.preventDefault();
      const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
          };
      console.log(newUser);
        };
    render() {
        const { errors } = this.state;
        return (
          <div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>
                <div className="form-group" onSubmit={this.onSubmit}>
                    <label> Name</label>
                    <input onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text" className="form-control" placeholder=" Enter your name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                type="password" className="form-control" placeholder="Enter your password" />
                </div>
                <div className="form-group">
                    <label> Re-enter password</label>
                    <input onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password" className="form-control" placeholder=" Re-enter your password" />
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