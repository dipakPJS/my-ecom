import { Outlet, NavLink } from "react-router-dom";
import { Crown } from "../../assets/crown";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import "./navigation.styles.scss";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
                isActive
                  ? { color: "red", fontSize: "20px" }
                  : { color: "black" }
              }
              className="nav-link"
            >
              Sign In
            </NavLink>
          )}
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
