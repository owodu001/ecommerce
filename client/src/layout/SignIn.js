import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../context/auth";


export default function SignIn (props) {
  
  const [isLoggedIn, setLoggedIn] = useState(false);
 const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
    function postLogin() {
    axios.post("/api/users/sign-in", {
      userName,
      password
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
        return (
            <div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    type="username"
                    value={userName}
                    onChange={e => { setUserName(e.target.value);}}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
          value={password} onChange={e => { setPassword(e.target.value);}}
          />
                </div>
               
                <button type="submit" className="btn btn-primary btn-block"onClick={postLogin}>Submit</button>

            </form>
            <p className=" new text-center">
              Are you New ?
            </p>
            <a href="/sign-up"><button type="submit" className="btn btn-secondary btn-block">Create a new account</button></a> 
          </div>
        </div>
        );
    
}