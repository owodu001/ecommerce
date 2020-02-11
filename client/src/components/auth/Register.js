import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../auth/auth";

export default function Register({ history }) {
  // todo: errors my friend...
  const { user, registerUser, errors = {} } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (user) {
      history.push("/login");
    }
  }, [user, history]);

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h3>Register</h3>
        <form
          noValidate
          onSubmit={e => {
            e.preventDefault();

            const newUser = {
              name,
              email,
              password,
              password2
            };

            registerUser(newUser, history);
          }}
        >
          <div className="form-group">
            <label> Name</label>
            <input
              onChange={event => setName(event.target.value)}
              value={name}
              id="name"
              type="text" className="form-control" placeholder=" Enter your name" />
            <span>{errors.name}</span>
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              onChange={event => setEmail(event.target.value)}
              value={email}
              id="email"
              type="email" className="form-control" placeholder="Enter your email" />
            <span>{errors.email}</span>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input onChange={event => setPassword(event.target.value)}
              value={password}
              id="password"
              type="password" className="form-control" placeholder="Enter your password" />
            <span>{errors.password}</span>
          </div>
          <div className="form-group">
            <label> Re-enter password</label>
            <input onChange={event => setPassword2(event.target.value)}
              value={password2}
              id="confirmPassword"
              type="password" className="form-control" placeholder=" Re-enter your password" />
            <span>{errors.password2}</span>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          <p className="forgot-password text-right">
            Already registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}


