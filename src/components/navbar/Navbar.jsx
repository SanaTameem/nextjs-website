"use client";
import "./navbar.css";
import Links from "../links/Links.jsx";
import Link from "next/link";

function Navbar() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <header className="header position-absolute bg-primary d-flex justify-content-start align-items-center">
        <Link
          href="/"
          className="logo-name mt-3 fw-bold h3 text-white text-decoration-none"
        >
          consulting
        </Link>
      </header>
      <nav className="navbar navbar-expand-lg bg-primary bg-gradient shadow-lg border-2 position-absolute">
        <div className="container-fluid p-0">
          <button
            className="navbar-toggler ms-2"
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
            <Links />
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
