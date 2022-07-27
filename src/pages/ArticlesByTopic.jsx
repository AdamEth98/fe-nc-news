import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";
import Sort from "../components/Sort";
import apiCall from "../utils/apiCall";

export default function ArticlesByTopic() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  // get topic name from params
  const { topic } = useParams();

  // retrieve all articles for a specific topic
  useEffect(() => {
    setIsLoading(true);
    apiCall(`articles?topic=${topic}`).then(({ status, data }) => {
      if (status === 200) {
        setArticles([...data.articles]);
        setIsLoading(false);
      }
    });
  }, [topic]);

  return isLoading ? (
    <>
      <p>Loading articles...</p>
    </>
  ) : (
    <>
      <Header title={topic[0].toUpperCase() + topic.substring(1)} />
      <Sort setArticles={setArticles} />
      <main>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </main>
    </>
  );
}
