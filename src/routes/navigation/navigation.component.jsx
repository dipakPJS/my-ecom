import { Outlet, NavLink } from "react-router-dom";
import { Crown } from "../../assets/crown";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <NavLink className="logo-container" to="/">
          <div>
            <Crown className="logo" />
          </div>
        </NavLink>
        <div className="nav-links-container">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "red", fontSize: "20px" } : { color: "black" }
            }
            className="nav-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/sign-in"
            style={({ isActive }) =>
              isActive ? { color: "red", fontSize: "20px" } : { color: "black" }
            }
            className="nav-link"
          >
            Sign In
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
