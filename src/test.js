import { Navbar, Container, Nav } from "react-bootstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/*import {
  faCoffee,
  faCartPlus,
  faBars,
} from "@fortawesome/free-solid-svg-icons";*/

import React from "react";
import { Link, Route, Router } from "react-router-dom";

function Test() {
  return (
    <div className="App-header">
      <div className="Navbar">
        <h5 className="logos">MyTodoList</h5>
        <div className="Links">
          <Link to="/" exact={true} className="Link">
            Home
          </Link>
          <Link to="/About" className="Link">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Test;
