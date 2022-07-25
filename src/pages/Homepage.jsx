// components
import ArticleList from "../components/ArticleList";
import Header from "../components/Header";

export default function Homepage({api}){


  return (
    <>
    <header className="container page-header">
      <Header title="Home" />
    </header>
      <ArticleList api={api}/>
    </>
  )
}