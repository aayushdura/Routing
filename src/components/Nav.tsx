import "./Nav.css";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const navstyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <Link to="/" style={navstyle}>
        <h3>Routing</h3>
      </Link>
      <ul className="navitems">
        <Link to="/" style={navstyle}>
          <li>Home</li>
        </Link>
        <Link to="/About" style={navstyle}>
          <li>About</li>
        </Link>
        <Link to="/Contact" style={navstyle}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
