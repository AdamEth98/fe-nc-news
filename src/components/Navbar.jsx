import "../css/nav.css"

export default function Navbar(){
  return (
    <nav>
      <div className="container nav-con">
        <a className="nav-title" href="/">nc-news</a>
        <ul className="nav-links">
          <li><a href="/">Topics</a></li>
        </ul>
      </div>
    </nav>
  )
}