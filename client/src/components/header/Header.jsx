import { Link } from "react-router-dom";
import profilePic from "../../screenshot.jpg";
import "./header.css";

export default function Header() {
  return (
    <header id="header">
      <div className="left">
        <i className="fa-solid fa-umbrella-beach"></i>
        <Link className="nav-link" to="/">BlogItUp</Link>
      </div>
      <nav className="center">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link className="nav-link" to="/write">Write</Link>
          </li>
          <li className="nav-list-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-list-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="right">
        <Link to="/about">
          <img
            src={profilePic}
            className="profile-pic-button"
            alt="profile pic"
          />
        </Link>
      </div>
    </header>
  );
}