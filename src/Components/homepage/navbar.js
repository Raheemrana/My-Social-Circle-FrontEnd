import logo from "../../Images/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager ,
} from "react-notifications";

const Navbar = () => {
  const history = useHistory();
  const LoggingOut = () =>{
    NotificationManager.success("Logging Out");
    console.log('should Log out')
    history.push("/login");
    localStorage.removeItem('AuthToken')
    localStorage.removeItem('User_name')
  }

  const user_name = localStorage.getItem('User_name');
  return (
    <nav className="navbar navbar-expand-lg navbar-light nvb">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block rounded-circle ms-2"
          alt=""
        />
      </a>
      <Link className="navbar-brand text-light" to="/">
        My Social Circle
      </Link>
      <NotificationContainer />
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active ">
          <Link className="nav-link text-light" to="/myposts"> My blogs <span className="sr-only">(current)</span> </Link> 
          </li>
          
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item active ">
          <div className="nav-link text-light" style={{cursor: "pointer"}}onClick={()=> LoggingOut()} href = "#">  {user_name} Log Out <span className="sr-only">(current)</span> </div> 
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;