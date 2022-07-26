import { useEffect, useState } from "react";
import Header from "../components/Header";
import TopicCard from "../components/TopicCard";
import { apiGet } from "../utils/api";
import Loading from "../components/Loading";

import "../css/topics.css";

export default function Topics() {
  // retrieve all topics from api
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiGet("topics").then(({ status, data }) => {
      if (status === 200) {
        setTopics([...data.topics]);
        setIsLoading(false);
      }
    });
  }, []);

  // conditional rendering
  if (isLoading) return <Loading msg="Loading topics..." />;

  return (
    <>
      <header className="page-header">
        <Header title="Topics" />
      </header>
      <main className="article-card-align">
        <section className="container topic-card">
          {topics.map((topic) => {
            return <TopicCard key={topic.slug} topic={topic} />;
          })}
        </section>
      </main>
    </>
  );
}
