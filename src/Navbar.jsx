import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid  ">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
              <NavLink className="navbar-brand"  to="/" >
                Techhy Aman
              </NavLink>
              <button
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item ">
                    <NavLink
                      activeclassname="active"
                  
                      className="nav-link "
                      to=""
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeclassname="active"
                      className="nav-link"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeclassname="active"
                      className="nav-link "
                      to="/service"
                    >
                      Service
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                 activeclassname="active"
                      className="nav-link "
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
