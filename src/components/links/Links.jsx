import Link from "next/link";
import { links } from "./links";
import "./links.css";

function Links() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-3">
      {links.map((link) => (
        <li className="nav-item" key={link.title}>
          <Link className="nav-link text-white" href={link.path}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Links;
