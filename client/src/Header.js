import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#282828ff" }}>
      <div className="container">
        <Link className="nav-link text-white" to="/">
            <div className="navbar-brand fw-bold text-white">
            L'Atlas du monde
            <br />
            <small className="fw-light">Par Carré Lucien</small>
            </div>
        </Link>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/pays">Pays</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/langues">Langues</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
