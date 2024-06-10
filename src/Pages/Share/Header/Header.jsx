import React, { useContext } from "react";
import logo from "../../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../../Provider/AuthProviders";

export default function Header() {
  const { user, logout } = useContext(Authcontext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };
  const navitems = (
    <>
      <li>
        <NavLink className="mx-2" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="mx-2" to="/">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="mx-2" to="/">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className="mx-2" to="/login">
          login
        </NavLink>
      </li>
      <li>
        {user?.email ? (
          <li>
            <button onClick={handleLogout}>logout</button>
            <Link to="/bookings">Bookings</Link>
          </li>
        ) : (
          <li></li>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navitems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navitems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-warning">Appointment</a>
        <a className="btn btn-outline btn-warning">{user?.email}</a>
      </div>
    </div>
  );
}
