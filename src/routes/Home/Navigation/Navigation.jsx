import { Fragment } from "react/jsx-runtime"
import{ReactComponent as CrwnLogo} from "../../../assets/crown.svg"
import { Link, Outlet } from "react-router-dom"

import "./Navigation.scss"


function Navigation() {
  return (
    <Fragment>
    <div className="navigation-container">
        <div className="logo-container">
        <CrwnLogo/>
        </div>
        <div className="nav-links-container">
        <Link to="/" className="nav-link">
            shop
        </Link>
        <Link to="/signin" className="nav-link">
            sign in
        </Link>
        </div>
    </div>
    <Outlet/>
    </Fragment>
  )
}

export default Navigation