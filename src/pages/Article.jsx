import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleFull from "../components/ArticleFull";
import CommentList from "../components/CommentList";
import Header from "../components/Header";
import { apiGet } from "../utils/api";
import BadRoute from "./BadRoute";

export default function Article({ user }) {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // get article id from params
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    apiGet(`articles/${article_id}`)
      .then(({ status, data }) => {
        if (status === 200) {
          setArticle({ ...data.article });
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  // conditional rendering

  if (isLoading) {
    return <p>Loading article...</p>;
  }

  // show 404 page if no article is found
  if (!article.hasOwnProperty("title")) {
    return <BadRoute title="404: Article not found." />;
  }

  return (
    <>
      <header className="page-header">
        <Header title={article.title} />
      </header>
      <main className="article-card-align">
        <ArticleFull article={article} />
        <CommentList id={article.article_id} user={user} />
      </main>
    </>
  );
}
