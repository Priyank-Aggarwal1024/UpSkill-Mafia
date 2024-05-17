import React from 'react';
import '../styles/navbar.css'
import { NavLink, useLocation, useParams } from 'react-router-dom';
function Navbar(props) {
    const { pathname: search } = useLocation()

    return (
        <>
            <section className="navbar">
                <div className="nav-top">
                    <div className="logo">
                        <p><b>LOGO</b></p>
                    </div>
                    <img src="#" alt="Brand Logo" style={{ display: "none" }} />
                    <div className="nav-top-right">
                        <NavLink className="text-pink login" to="/login">Login</NavLink>
                        <NavLink className="bg-pink signup" to="/signup">Signup</NavLink>
                    </div>
                </div>
                <div className="nav-bottom bg-gray">
                    <div className="nav-list">
                        <NavLink className={`nav-list-item ${search == "/" ? "active-nav-link" : null}`} to="/" ><span> Overview</span></NavLink>
                        <NavLink className={`nav-list-item ${search == "/curriculum" ? "active-nav-link" : null}`} to="/curriculum" ><span> Curriculum</span></NavLink>
                        <NavLink className={`nav-list-item ${search == "/refund" ? "active-nav-link" : null}`} to="/refund" ><span> Refund</span></NavLink>
                        <NavLink className={`nav-list-item ${search == "/testimonials" ? "active-nav-link" : null}`} to="/testimonials" ><span> Testimonials</span></NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Navbar;