import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";

const Navigation=()=>{
  return(
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
            <h1>navigation</h1>
        </Link>
        <div className="links-container">
            <Link className="nav-link" to="/shop">SHOP</Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}


export default Navigation;