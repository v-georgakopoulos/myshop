import { Fragment } from "react/jsx-runtime";
import { useContext } from "react";

import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import { UserContext } from "../../../contexts/userContext";
import { CartContext } from "../../../contexts/cartContext";
import { signOutUser } from "../../../utils/Firebase/firebase";

import CartIcon from "../../../components/CartIcon/CartIcon";
import CartDropdown from "../../../components/CartDropdown/CartDropdown"

import "./Navigation.scss";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)
  // console.log(currentUser);



  return (
    <Fragment>
      <div className="navigation-container">
        <div className="logo-container">
          <CrwnLogo />
        </div>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            shop
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              sign out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              sign in
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
