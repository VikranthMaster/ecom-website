import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const NavBar = () => {
  useEffect(() => {
    // Mobile menu toggle
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");
    const close = document.getElementById("nav-close");

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.add("show-menu");
      });
    }

    if (close && nav) {
      close.addEventListener("click", () => {
        nav.classList.remove("show-menu");
      });
    }

    // Search modal toggle
    const searchBtn = document.getElementById("search-btn");
    const searchClose = document.getElementById("search-close");
    const search = document.getElementById("search");

    if (searchBtn && search) {
      searchBtn.addEventListener("click", () => {
        search.classList.add("show-search");
      });
    }

    if (searchClose && search) {
      searchClose.addEventListener("click", () => {
        search.classList.remove("show-search");
      });
    }

    // Login modal toggle
    const loginBtn = document.getElementById("login-btn");
    const loginClose = document.getElementById("login-close");
    const login = document.getElementById("login");

    if (loginBtn && login) {
      loginBtn.addEventListener("click", () => {
        login.classList.add("show-login");
      });
    }

    if (loginClose && login) {
      loginClose.addEventListener("click", () => {
        login.classList.remove("show-login");
      });
    }
  }, []);

  return (
    <>
      {/*==================== HEADER ====================*/}
      <header className="header" id="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            Logo
          </Link>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  About Us
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Featured
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Contact Me
                </a>
              </li>
            </ul>

            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__actions">
            <i className="ri-search-line nav__search" id="search-btn"></i>
            <i className="ri-user-line nav__login" id="login-btn"></i>

            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
      </header>

      {/*==================== SEARCH ====================*/}
      <div className="search" id="search">
        <form action="" className="search__form">
          <i className="ri-search-line search__icon"></i>
          <input
            type="search"
            placeholder="What are you looking for?"
            className="search__input"
          />
        </form>
        <i className="ri-close-line search__close" id="search-close"></i>
      </div>

      {/*==================== LOGIN ====================*/}
      <div className="login" id="login">
        <form action="" className="login__form">
          <h2 className="login__title">Log In</h2>

          <div className="login__group">
            <div>
              <label htmlFor="email" className="login__label">
                Email
              </label>
              <input
                type="email"
                placeholder="Write your email"
                id="email"
                className="login__input"
              />
            </div>

            <div>
              <label htmlFor="password" className="login__label">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                className="login__input"
              />
            </div>
          </div>

          <div>
            <p className="login__signup">
              You do not have an account? <a href="#">Sign up</a>
            </p>

            <a href="#" className="login__forgot">
              You forgot your password
            </a>

            <button type="submit" className="login__button">
              Log In
            </button>
          </div>
        </form>

        <i className="ri-close-line login__close" id="login-close"></i>
      </div>

      {/*==================== MAIN ====================*/}
      <main className="main">
        <img src="assets/img/bg-image.png" alt="image" className="main__bg" />
      </main>
    </>
  );
};
