import { Link } from "react-router-dom"
import "../css/nav.css"

export default function Navbar(){
  return (
    <nav>
      <div className="container nav-con">
        <a className="nav-title" href="/">nc-news</a>
        <ul className="nav-links">
          <li><Link to={"/topics"}>Topics</Link></li>
        </ul>
      </div>
    </nav>
  )
}