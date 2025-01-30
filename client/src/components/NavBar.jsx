// navBar.jsx
import { NavLink } from "react-router";
import "../assets/styles/NavBar.css";
import Button from "./Button";
const NavBar = () => {
  return (
    <header>
      <nav>
        <h2 className="nav-logo">
          <NavLink to="/">Docify</NavLink>
        </h2>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/doctors">Doctors</NavLink>
          </li>
          <li>
            <NavLink to="/appointments">Appointments</NavLink>
          </li>
          <li>
            <NavLink to="/applyfordoctor">Apply for Doctor</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About US</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact US</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <Button />
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
