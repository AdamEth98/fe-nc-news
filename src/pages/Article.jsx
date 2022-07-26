import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleFull from "../components/ArticleFull";
import CommentList from "../components/CommentList";
import Header from "../components/Header";
import apiCall from "../utils/apiCall";

export default function Article() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // get article id from params
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    apiCall(`articles/${article_id}`).then(({ status, data }) => {
      if (status === 200) {
        setArticle({ ...data.article });
        setIsLoading(false);
      }
    });
  }, [article_id]);

  return isLoading ? (
    <>
      <p>Loading article...</p>
    </>
  ) : (
    <>
      <Header title={article.title} />
      <main>
        <ArticleFull article={article} />
        <CommentList id={article.article_id} />
      </main>
    </>
  );
}
