import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import apiCall from "../utils/apiCall";
import Sort from "./Sort";

export default function ArticleList() {
  // store all articles
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // retrieve all articles from api
    setIsLoading(true);

    apiCall("articles").then(({ status, data }) => {
      if (status === 200) {
        setArticles([...data.articles]);
        setIsLoading(false);
      }
    });
  }, []);

  return isLoading ? (
    <>
      <p>Loading articles...</p>
    </>
  ) : (
    <>
      <Sort setArticles={setArticles} />
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </>
  );
}
