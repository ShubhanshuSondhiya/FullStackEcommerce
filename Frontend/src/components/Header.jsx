import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user/login">Login</Link>
        </li>
        <li>
          <Link to="/user/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
