// components
import ArticleList from "../components/ArticleList";
import Header from "../components/Header";

export default function Homepage({ api }) {
  return (
    <>
      <Header title="Home" />
      <ArticleList api={api} />
    </>
  );
}
