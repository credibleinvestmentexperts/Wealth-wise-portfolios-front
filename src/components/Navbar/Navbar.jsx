import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { GrMenu } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout, RESET } from "../../redux/features/auth/authSlice";
import { CgMenuGridR } from "react-icons/cg";
import {
  AdminAuthorLink,
  ShowOnLogin,
  ShowOnLogout,
} from "../protect/hiddenLink";
import { UserImage } from "../../Pages/Profile/UserProfile/UserProfile";
import { FaChevronRight } from "react-icons/fa"; // or any icon you like

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const moreOptionsRef = useRef(null);

  const goHome = () => {
    navigate("/");
  };

  const logoutUser = async () => {
    dispatch(RESET());
    await dispatch(logout());
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        moreOptionsRef.current &&
        !moreOptionsRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navCon">
        <div className="navbar-brand" onClick={goHome}>
          <NavLink to="/" className="logo">
            Wealthwise
          </NavLink>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        <ShowOnLogin>
          <NavLink to="/my-account">Dashboard</NavLink>
        </ShowOnLogin>
        <NavLink to="/investment-plans">Portfolio Plans</NavLink>
        <NavLink to="/our-story">About Us</NavLink>
        <NavLink to="/support">Help Center</NavLink>
        <NavLink to="/how-it-works">How It Works</NavLink>
        <NavLink to="/market-rates">Current Rates</NavLink>
        <AdminAuthorLink>
          <NavLink to="/compose-email">Send Email</NavLink>
        </AdminAuthorLink>
        <NavLink to="/user-profile" className="profileText">
          Profile
        </NavLink>
      </div>

      {/* Right Actions */}
      <div className="nav-actions">
        <ShowOnLogout>
          <NavLink to="/login" className="loginButton">
            Sign In
          </NavLink>
        </ShowOnLogout>

        <ShowOnLogin>
          <NavLink to="/user-profile" className="profileImg">
            <UserImage />
          </NavLink>
        </ShowOnLogin>

        {/* Mobile Menu Toggle */}
        <div className="icon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <CgMenuGridR />}
        </div>

        {/* Desktop More Options Dropdown */}
        <div
          ref={moreOptionsRef}
          className="more-options"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {/* Optional: You can remove this if not needed */}
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="linksDivs">
                <ShowOnLogin>
                  <NavLink to="/my-account">Dashboard</NavLink>
                </ShowOnLogin>
                <NavLink to="/investment-plans">Portfolio Plans</NavLink>
                <NavLink to="/our-story">About Us</NavLink>
                <NavLink to="/support">Help Center</NavLink>
                <NavLink to="/how-it-works">How It Works</NavLink>
                <NavLink to="/market-rates">Current Rates</NavLink>
                <AdminAuthorLink>
                  <NavLink to="/compose-email">Send Email</NavLink>
                </AdminAuthorLink>
                <NavLink to="/user-profile" className="profileText">
                  Profile
                </NavLink>
              </div>
              <ShowOnLogout>
                <div className="buttonDivs">
                  <NavLink to="/login">Login</NavLink>
                </div>
              </ShowOnLogout>
              <ShowOnLogin>
                <div className="buttonDivs">
                  <button onClick={logoutUser}>Logout</button>
                </div>
              </ShowOnLogin>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {/* {mobileMenuOpen && (
        <div className="fullscreen-menu">
          <ShowOnLogin>
            <NavLink to="/my-account" onClick={toggleMobileMenu}>
              My Account
            </NavLink>
          </ShowOnLogin>
          <NavLink to="/investment-plans" onClick={toggleMobileMenu}>
            Investment Plans
          </NavLink>
          <NavLink to="/our-story" onClick={toggleMobileMenu}>
            Our Story
          </NavLink>
          <NavLink to="/support" onClick={toggleMobileMenu}>
            Support
          </NavLink>
          <NavLink to="/how-it-works" onClick={toggleMobileMenu}>
            How It Works
          </NavLink>
          <NavLink to="/market-rates" onClick={toggleMobileMenu}>
            Market Rates
          </NavLink>
          <ShowOnLogin>
            <NavLink to="/user-profile" onClick={toggleMobileMenu}>
              My Profile
            </NavLink>
          </ShowOnLogin>
          <ShowOnLogout>
            <NavLink
              to="/login"
              className="logoutBtn"
              onClick={toggleMobileMenu}
            >
              Login
            </NavLink>
          </ShowOnLogout>
          <ShowOnLogin>
            <button
              className="logoutBtn"
              onClick={() => {
                logoutUser();
                toggleMobileMenu();
              }}
            >
              Logout
            </button>
          </ShowOnLogin>
        </div>
      )} */}
      {mobileMenuOpen && (
        <div className="fullscreen-menu">
          <ShowOnLogin>
            <NavLink
              to="/my-account"
              className="menu-item"
              onClick={toggleMobileMenu}
            >
              <span>Dashboard</span>
              <FaChevronRight className="menu-icon" />
            </NavLink>
          </ShowOnLogin>

          <NavLink
            to="/investment-plans"
            className="menu-item"
            onClick={toggleMobileMenu}
          >
            <span>Portfolio Plans</span>
            <FaChevronRight className="menu-icon" />
          </NavLink>

          <NavLink
            to="/our-story"
            className="menu-item"
            onClick={toggleMobileMenu}
          >
            <span>About Us</span>
            <FaChevronRight className="menu-icon" />
          </NavLink>

          <AdminAuthorLink>
            <NavLink
              to="/compose-email"
              className="menu-item"
              onClick={toggleMobileMenu}
            >
              <span>Email Composer</span>
              <FaChevronRight className="menu-icon" />
            </NavLink>
          </AdminAuthorLink>

          <NavLink
            to="/support"
            className="menu-item"
            onClick={toggleMobileMenu}
          >
            <span>Help Center</span>
            <FaChevronRight className="menu-icon" />
          </NavLink>

          <NavLink
            to="/how-it-works"
            className="menu-item"
            onClick={toggleMobileMenu}
          >
            <span>How It Works</span>
            <FaChevronRight className="menu-icon" />
          </NavLink>

          <NavLink
            to="/market-rates"
            className="menu-item"
            onClick={toggleMobileMenu}
          >
            <span>Current Rates</span>
            <FaChevronRight className="menu-icon" />
          </NavLink>

          <ShowOnLogin>
            <NavLink
              to="/user-profile"
              className="menu-item"
              onClick={toggleMobileMenu}
            >
              <span>My Profile</span>
              <FaChevronRight className="menu-icon" />
            </NavLink>
          </ShowOnLogin>

          <ShowOnLogout>
            <NavLink
              to="/login"
              className="logoutBtn"
              onClick={toggleMobileMenu}
            >
              Login
            </NavLink>
          </ShowOnLogout>

          <ShowOnLogin>
            <button
              className="logoutBtn"
              onClick={() => {
                logoutUser();
                toggleMobileMenu();
              }}
            >
              Logout
            </button>
          </ShowOnLogin>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
