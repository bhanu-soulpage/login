// import logo from "../public/Subtract.png";
// import mainLogo from "../public/Subtract (1).png";
import Router from "next/router";
import Link from "next/link";
// import '../styles/Navbar.css';
function NavBar() {
  return (
    <div className="navbar-container navbar-height">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand " href="#">
            <div className="image-logo-sub-2 pt-2">
              {/* <img src={logo} className="logo-sub-1 logo" />
                                <img src={mainLogo} className="logo-sub-2 logo" /> */}
              <img src="logo.svg" className="img-fluid" />
              <span className="logo-head1"> NetBook</span>
            </div>
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
            <ul className="navbar-nav me-auto mb-3 ml-3 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="nav-home"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Community
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    About us
                  </a>
                  <a className="dropdown-item" href="#">
                    Contact Us action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Why Choose Us? here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Events
                </a>
              </li>
            </ul>

            <div className="nav-form d-flex">
              <Link  href="/login">
                <button className="btn btn-primary login-btn" type="submit">
                  Log In
                </button>
              </Link> 
            </div>
          </div>
        </div>
        <hr className="navbar-line" />
      </nav>
    </div>
  );
}

export default NavBar;
