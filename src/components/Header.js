const Header = () => {
  const collapseNav = () => {
    const navbar = document.getElementById("navbarText");
    navbar.classList.remove("show");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-custom navbar-light sticky-top">
      <div className="container">
        <img
          src="./mq-logo-small.png"
          height="30"
          className="d-inline-block align-top pr-2"
          alt=""
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse px-3" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#footer"
                onClick={() => setTimeout(() => collapseNav(), 150)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
