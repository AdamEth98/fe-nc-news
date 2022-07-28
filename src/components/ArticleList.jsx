import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { apiGet } from "../utils/api";
import Sort from "./Sort";
import Loading from "./Loading";

export default function ArticleList() {
  // store all articles
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // retrieve all articles from api
    setIsLoading(true);

    apiGet("articles").then(({ status, data }) => {
      if (status === 200) {
        setArticles([...data.articles]);
        setIsLoading(false);
      }
    });
  }, []);

  return isLoading ? (
    <>
      <Loading msg="Loading articles..." />
    </>
  ) : (
    <>
      <section className="sort-align">
        <Sort setArticles={setArticles} />
      </section>
      <main className="article-card-align">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </main>
    </>
  );
}
