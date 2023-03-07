import React from "react";
import { NavLink } from "react-router-dom";
class Login extends React.Component {
  render() {
    return (
        <div className="container">
        <div className="design">
          <div className="pill-1 rotate-45" />
          <div className="pill-2 rotate-45" />
          <div className="pill-3 rotate-45" />
          <div className="pill-4 rotate-45" />
        </div>
        <div className="login">
          <h3 className="title">User Login</h3>
          <div className="text-input">
            <i className="ri-user-fill" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="text-input">
            <i className="ri-lock-fill" />
            <input type="password" placeholder="Password" />
          </div>
          <button className="login-btn">LOGIN</button>
          <a href="./Forget_Password" className="forgot">Forgot Password?</a>
          <div className="create">
            <a href="./Register"> Register</a>
           {/* <i className="ri-arrow-right-fill" />*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
