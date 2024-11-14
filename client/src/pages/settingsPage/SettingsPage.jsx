import React, { useState } from "react";
import "./settingsPage.css";

export default function SettingsPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [attention, setAttention] = useState("");
  return (
    <div className="settings-page">
      <div className="settings-page-container">
        <div className="settings-page-header">
          <span className="settings-page-title">Update Your Account</span>
          <span className="delete-account-button">Delete Account</span>
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
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}