import React from "react";

import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Dehazer
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/">
              {props.aboutText}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="https://www.linkedin.com/in/dhruv-sharma-5a1524257/">
              {props.contact}
            </a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
    title :  PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired,
    contact :  PropTypes.string.isRequired
};

NavBar.defaultProps ={
    title:"set title here",
    aboutText:"set About here",
    contact:"set contacts here"
}
