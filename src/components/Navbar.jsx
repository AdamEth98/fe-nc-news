import { Link } from "react-router-dom";
import "../css/nav.css";

export default function Navbar() {
  return (
    <nav>
      <div className="container nav-con">
        <Link className="nav-title" to="/">
          NC-News
        </Link>
        <ul className="nav-links">
          <li>
            <Link to={"/topics"}>Topics</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
