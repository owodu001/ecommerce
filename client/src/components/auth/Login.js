import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../auth/auth";
import { Link } from "react-router-dom";

export default function Login({ history }) {
  // todo: errors my friend...
  const { user, loginUser, errors = {} } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <form
      noValidate
      onSubmit={e => {
        e.preventDefault();

        const userData = {
          email,
          password
        };

        loginUser(userData);
      }}
    >
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email"
              type="username"
              value={email}
              onChange={e => { setEmail(e.target.value); }}
            />
            <span>
              {errors.email}
              {errors.emailnotfound}
            </span>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password"
              value={password} onChange={e => { setPassword(e.target.value); }}
            />
          </div>
          <span>
            {errors.password}
            {errors.passwordincorrect}
          </span>

          <button type="submit" className="btn btn-primary btn-block">Log In</button>

          <p className=" new text-center">
            Are you New ? <Link to="/register">Register</Link>
          </p>

        </div>
      </div>

    </form>

  );
}
