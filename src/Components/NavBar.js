import React from 'react';
import {Link,NavLink} from 'react-router-dom'
import './Style.css'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#6f35c7"}}>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink 
                                 exact
                                 className="nav-link" 
                                 style={{color:"#b5a4ce"}} 
                                 activeClassName="text-white"
                                 to="/DashBoard">
                                     DashBoard <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                exact
                                className="nav-link" 
                                activeClassName="text-white"
                                style={{color:"#b5a4ce"}} 
                                to="/Contacts">Contacts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                exact
                                className="nav-link" 
                                activeClassName="text-white"
                                style={{color:"#b5a4ce"}} 
                                to="/Login">Login
                            </NavLink>
                        </li>
                    </ul>
                    <div className="my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink 
                                    exact
                                    className="nav-link"
                                    activeClassName="text-white"
                                    style={{color:"#b5a4ce"}} 
                                    to="/Logout">Logout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;