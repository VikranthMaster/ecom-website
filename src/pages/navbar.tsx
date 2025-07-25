"use client";

import { Link } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import { useTheme } from "../components/theme";
import "./navbar.css";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    const btn = btnRef.current;
    if (!btn) return;

    // Start the animation sequence
    btn.classList.add("entering");

    // Person enters the button
    setTimeout(() => {
      btn.classList.remove("entering");
      btn.classList.add("inside");
    }, 600);

    // Person starts falling and text changes smoothly
    setTimeout(() => {
      btn.classList.remove("inside");
      btn.classList.add("falling");
    }, 1200);

    // Text changes after person starts falling
    setTimeout(() => {
      const text = btn.querySelector(".btn-text") as HTMLElement;
      if (text) {
        text.style.opacity = "0";
        setTimeout(() => {
          text.textContent = "Logged Out";
          text.style.opacity = "1";
        }, 200);
      }
    }, 1400);

    // Reset after animation completes
    setTimeout(() => {
      btn.classList.remove("falling");
      const text = btn.querySelector(".btn-text") as HTMLElement;
      if (text) {
        text.style.opacity = "0";
        setTimeout(() => {
          text.textContent = "Log Out";
          text.style.opacity = "1";
        }, 200);
      }
    }, 4000);
  };

  const toggleMenu = () => {
    setToggle((curr) => !curr);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsMobileSearchOpen(false);
    }
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    if (!isMobileSearchOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <h1>RESIN ARTOLOGY</h1>
        </div>

        {/* Desktop Search Box - Center */}
        <div className="search-container">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <Search className="search-icon" />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/wishlist" className="nav-link">
            Wishlist
          </Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
          <Link to="/profile" className="nav-link">
            Name
          </Link>

          {/* Profile Icon */}
          <div id={theme}>
            <button className="profile-button">
              <User className="profile-icon" onClick={toggleMenu} />
              {toggle && (
                <div className="dropdown">
                  <Link to="/profile">
                    <h1>User Info</h1>
                  </Link>
                  <h1>Orders</h1>
                  <h1>Contact Us</h1>
                  <button
                    className="person-logout-btn"
                    ref={btnRef}
                    onClick={handleClick}
                  >
                    <span className="btn-text">Log Out</span>
                    <div className="person-container">
                      <svg
                        className="person-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="door-container">
                      <div className="door-left"></div>
                      <div className="door-right"></div>
                    </div>
                  </button>

                  <div className="display">
                    <div className="toggle">
                      <div
                        className="circle"
                        onClick={() =>
                          setTheme(theme === "light" ? "dark" : "light")
                        }
                      >
                        <svg
                          className="sun"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                        </svg>
                        <svg
                          className="moon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="mobile-controls">
          <button
            className="mobile-search-button"
            onClick={toggleMobileSearch}
            aria-label="Toggle search"
          >
            <Search className="mobile-search-icon" />
          </button>
          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="hamburger-icon" />
            ) : (
              <Menu className="hamburger-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Container */}
      <div
        className={`mobile-search-container ${
          isMobileSearchOpen ? "open" : ""
        }`}
      >
        <div className="mobile-search-wrapper">
          <input
            type="text"
            placeholder="Search..."
            className="mobile-search-input"
            autoFocus={isMobileSearchOpen}
          />
          <Search className="mobile-search-input-icon" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-links">
          <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link
            to="/wishlist"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Wishlist
          </Link>
          <Link
            to="/cart"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Cart
          </Link>
          <Link
            to="/profile"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Name
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              paddingTop: "8px",
            }}
          >
            <span style={{ color: "#000", fontSize: "14px" }}>Profile</span>
            <button className="profile-button">
              <User className="profile-icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
