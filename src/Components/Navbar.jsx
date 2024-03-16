import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h4>
              <span class="badge bg-secondary">News Monkey</span>
            </h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("Technology")}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link cursor-pointer"
                  onClick={() => setCategory("Business")}
                >
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Health")}>
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Sports")}>
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("Science")}
                >
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("Entertainment")}
                >
                  Entertainment
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
