import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Center Div
          </Link>
        </li>
        <li>
          <Link to="/tooltip" className="nav-link">
            Tooltip
          </Link>
        </li>
        <li>
          <Link to="/table-layout" className="nav-link">
            Table Data
          </Link>
        </li>
      </ul>
    </nav>
  );
}
