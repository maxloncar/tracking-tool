import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import trackers from "../assets/trackers.svg";
import history from "../assets/history.svg";
import logoutIcon from "../assets/logout.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navigation() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Tracking tool</h1>
      </div>
      <nav>
        <ul className="nav_links">
          <NavLink to="/">
            <li className="trackers">
              <div className="nav_link">
                <img src={trackers} alt="Trackers logo" />
                Trackers
              </div>
            </li>
          </NavLink>
          <NavLink to="/history">
            <li className="history">
              <div className="nav_link">
                <img src={history} alt="History logo" />
                History
              </div>
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="logout">
              <div className="nav_link" onClick={handleLogout}>
                <img src={logoutIcon} alt="Logout logo" />
                Logout
              </div>
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
