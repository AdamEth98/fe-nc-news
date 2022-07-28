import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";
import Sort from "../components/Sort";
import { apiGet } from "../utils/api";
import BadRoute from "./BadRoute";

export default function ArticlesByTopic() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  // get topic name from params
  const { topic } = useParams();

  // retrieve all articles for a specific topic
  useEffect(() => {
    setIsLoading(true);
    apiGet(`articles?topic=${topic}`)
      .then(({ status, data }) => {
        if (status === 200) {
          setArticles([...data.articles]);
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [topic]);

  if (isLoading) return <p>Loading articles...</p>;
  if (articles.length === 0) return <BadRoute title="404: Topic not found" />;
  return (
    <>
      <header className="page-header">
        <Header title={topic[0].toUpperCase() + topic.substring(1)} />
      </header>
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
