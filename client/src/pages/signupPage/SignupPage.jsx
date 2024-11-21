import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signupPage.css";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [attention, setAttention] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setAttention("Missing field");
      return;
    }
    
    navigate("/");
  }

  return (
    <div className="signup-page">
      <div className="signup-page-container">
        <div className="signup-page-header">
          <h2 className="signup-page-title">Sign Up</h2>
        </div>
        <form className={`signup-form ${attention ? "error" : "static"}`}>
          <div className="signup-form-group">
            <label htmlFor="signup-form-username" id="signup-form-username-label">Username</label>
            <input
              className="signup-form-username"
              id="signup-form-username"
              name="signup-form-username"
              type="username"
              value={username}
              required
              onChange={(e) => {
                setUsername(e.target.value)
                setAttention("")
              }}
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="signup-form-email" id="signup-form-email-label">Email</label>
            <input
              className="signup-form-email"
              id="signup-form-email"
              name="signup-form-email"
              type="text"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value)
                setAttention("")
              }}
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="signup-form-password" id="signup-form-password-label">Password</label>
            <input
              className="signup-form-password"
              id="signup-form-password"
              name="signup-form-password"
              type="password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value)
                setAttention("")
              }}
            />
          </div>
          <div className="signup-form-group">
            <div className="signup-attention">{attention}</div>
            <button id="signup-button" onClick={(e) => handleSubmit(e)}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}