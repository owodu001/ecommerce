import React, { useState,useEffect  } from "react";
import axios from 'axios';
import { useAuth } from "../context/auth";

function SignUp ({ history }) {
  const [isSignUp, setSignedUp] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { setAuthTokens } = useAuth();

  function postSignup() {
    axios.post("/api/users/sign-up", {
      name,
      email,
      password,
      password2
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }
  useEffect(() => {

    if (isSignUp) {
      history.push("/home");
    }
  }, [isSignUp, history]);

         return (
          <div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>
                <div className="form-group" noValidate
        >
                    <label> Name</label>
                    <input  
              onChange={event => setName(event.target.value)}
              value={name}
              id="name"
                  type="text" className="form-control" placeholder=" Enter your name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input  
              onChange={event => setEmail(event.target.value)}
              value={email}
              id="email"
                  type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={event => setPassword(event.target.value)}
              value={password}
              id="password"
                type="password" className="form-control" placeholder="Enter your password" />
                </div>
                <div className="form-group">
                    <label> Re-enter password</label>
                    <input onChange={event => setPassword2(event.target.value)}
              value={password2}
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

export default  SignUp;