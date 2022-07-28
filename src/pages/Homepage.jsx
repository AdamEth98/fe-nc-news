// components
import ArticleList from "../components/ArticleList";
import Header from "../components/Header";

export default function Homepage({ api }) {
  return (
    <>
      <header className="page-header">
        <Header title="Recent Articles" />
      </header>
      <ArticleList api={api} />
    </>
  );
}
