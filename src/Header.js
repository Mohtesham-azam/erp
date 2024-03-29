import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            ERP-System
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/orders">
                  Orders
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
export default Header;
