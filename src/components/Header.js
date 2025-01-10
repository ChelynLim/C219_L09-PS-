import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Republic_Polytechnic_Logo.jpg";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="RP logo"
          title="RP | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getClass}>
          About
        </NavLink>
        <NavLink to="/diplomas" className={getClass}>
          Diplomas
        </NavLink>
      </nav>
    </header>
  );
}