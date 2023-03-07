import React from "react";

class Type extends React.Component {
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
          <h3 className="title">Choose user type </h3>
          <div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Seller
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Customer
          </label>
        </div>
        
      </div>
          
          <button className="login-btn">NEXT</button>
          
        </div>
      </div>
    );
  }
}

export default Type;
