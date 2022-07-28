import { Link } from "react-router-dom";
import "../css/404.css";

export default function BadRoute({ title }) {
  return (
    <>
      <main>
        <section className="container cont-404">
          <h1 className="title-404">{title}</h1>
          <Link className="return-404" to="/">
            Go Home
          </Link>
        </section>
      </main>
    </>
  );
}
