import React from "react";

class Register extends React.Component {
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
          <h3 className="title">Register</h3>
          <div className="text-input">
            <i className="ri-user-fill" />
            <input type="text" placeholder="First Name" />
          </div>
          <div className="text-input">
            <i className="ri-user-fill" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="text-input">
            <i className="ri-user-fill" />
            <input type="text" placeholder="Email id" />
          </div>
          <div className="text-input">
            <i className="ri-lock-fill" />
            <input type="password" placeholder="Password" />
          </div>
          <button className="login-btn">SUBMIT</button>
          <div className="create">
            <a href="./"> Registered Already? Log in</a> 
            <i className="ri-arrow-right-fill" />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
