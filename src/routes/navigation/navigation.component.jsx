import { Outlet, NavLink } from "react-router-dom";
import { Crown } from "../../assets/crown";

import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
 

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
            to="/shop"
            style={({ isActive }) =>
              isActive ? { color: "red", fontSize: "20px" } : { color: "black" }
            }
            className="nav-link"
          >
            Shop
          </NavLink>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <NavLink
              to="/auth"
              style={({ isActive }) =>
                isActive ? { color: "red", fontSize: "20px" } : { color: "black" }
              }
              className="nav-link"
            >
              Sign In
            </NavLink>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
