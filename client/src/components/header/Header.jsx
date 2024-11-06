import { Link } from "react-router-dom";
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
        <div className="profile-pic-button"></div>
      </div>
    </header>
  );
}