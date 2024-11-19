import React, { useState } from "react";
import "./settingsPage.css";

export default function SettingsPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [attention, setAttention] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setAttention("Missing field");
      return;
    }
  }

  return (
    <div className="settings-page">
      <div className="settings-page-container">
        <div className="settings-page-header">
          <h2 className="settings-page-title">Update Your Account</h2>
        </div>
        <form className="settings-form">
          <div className="settings-form-group">

            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput"
                />
            </div>
          </div>
          <div className="settings-form-group">
            <label htmlFor="settings-form-username" id="settings-form-username-label">Username</label>
            <input
              className="settings-form-username"
              id="settings-form-username"
              name="settings-form-username"
              type="username"
              value={username}
              required
              onChange={(e) => {
                setUsername(e.target.value)
                setAttention("")
              }}
            />
          </div>
          <div className="settings-form-group">
            <label htmlFor="settings-form-email" id="settings-form-email-label">Email</label>
            <input
              className="settings-form-email"
              id="settings-form-email"
              name="settings-form-email"
              type="text"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value)
                setAttention("")
              }}
            />
          </div>
          <div className="settings-form-group">
            <label htmlFor="settings-form-password" id="signup-form-password-label">Password</label>
            <input
              className="settings-form-password"
              id="settings-form-password"
              name="settings-form-password"
              type="password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value)
                setAttention("")
              }}
            />
          </div>
          <div className="settings-form-group">
            <div className="settings-attention">{attention}</div>
            <button id="settings-update-button" onClick={(e) => handleSubmit(e)}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}