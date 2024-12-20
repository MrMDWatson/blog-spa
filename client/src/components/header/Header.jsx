import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/screenshot.jpg";
import { useSelector } from "react-redux";
import "./header.css";

export default function Header() {
  const { user } = useSelector((store) => store.app);
  return (
    <header id="header">
      
      <nav className="navbar">
        <ul className="nav-list">
        
          <div className="nav-list-left">
            <li className="nav-list-item">
              <Link className="nav-link" to="/">BlogItUp</Link>
            </li>
            <li className="nav-list-item">
              <Link className="nav-link" to="/hub/write">Write</Link>
            </li>
          </div>
          <div className="nav-list-right">
            {user
              ? (
                <li className="nav-list-item dropdown">
                  <Link to="/hub/settings">
                    <img
                      src={profilePic}
                      className="profile-pic"
                      alt="profile pic"
                    />
                  </Link>
                  <ul className="nav-dropdown">
                    <li className="nav-dropdown-item">
                      <Link className="drop-nav-link" to="/hub/settings">Settings</Link>
                    </li>
                    <li className="nav-dropdown-item">
                      <Link className="drop-nav-link" to="/logOut">Log Out</Link>
                    </li>
                  </ul>
                </li>
              )
              : (
                <>
                  <li className="nav-list-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                  </li>
                  <li className="nav-list-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                </>
              )
            }
          </div>
        </ul>
      </nav>
    </header>
  );
}