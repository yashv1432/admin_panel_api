import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <!-- Topbar --> */}
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow pt-0 pb-0">
        {/* <!-- Sidebar Toggle (Topbar) --> */}

        <button
          id="sidebarToggleTop"
          class="btn btn-link d-md-none rounded-circle mr-3"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars" style={{ height: "1rem", width: "1rem" }}></i>
        </button>

        <ul className="ms-auto">
          <li class="nav-item dropdown mt-3" style={{ listStyle: "none" }}>
            <a
              class="nav-link dropdown-toggle"
              style={{ whiteSpace: "nowrap" }}
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="topbar-divider d-none d-sm-block border-right"></div>
              <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                username@uwo.com
              </span>
              <img
                class="img-profile rounded-circle"
                src="./images/profile.png"
              />
            </a>
            {/* <!-- Dropdown - User Information --> */}
            <div
              class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <Link
                class="dropdown-item"
                to="ChangePswd"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "0.25rem 1.5rem",
                  clear: "both",
                  fontWeight: "400",
                  color: "#3a3b45",
                  textAlign: "inherit",
                  whiteSpace: "nowrap",
                  backgroundColor: "transparent",
                  border: "0",
                  fontSize: "14px",
                }}
              >
                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Chanage Password
              </Link>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "0.25rem 1.5rem",
                  clear: "both",
                  fontWeight: "400",
                  color: "#3a3b45",
                  textAlign: "inherit",
                  whiteSpace: "nowrap",
                  backgroundColor: "transparent",
                  border: "0",
                  fontSize: "14px",
                }}
                // to="/ChangePswd.js"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      {/* <!-- Logout Modal--> */}
      <div
        class="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                class="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a class="btn btn-primary" href="index.php?log=out">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
