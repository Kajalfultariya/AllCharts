import React from "react";
import { Link ,NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
           <div className="container">
           <div className="container-fluid">
                <a className="navbar-brand" href="/">All Charts</a>
                <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink  className="nav-link" exact to="/">Line </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Area">Area</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Scatter">Scatter</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/TwoLevelPie">Two Level Pie</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Radar">Radar</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/RadialBar">RadialBar</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Treemap">Treemap</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Tooltip">Tooltip</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Legend">Legend Effect</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Responsive">Responsive Container</NavLink>
                        </li>
                        
                    </ul>

                </div>
            </div>
           </div>
        </nav>
    )
}
export default Navbar;