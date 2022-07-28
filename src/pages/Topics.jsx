import { useEffect, useState } from "react";
import Header from "../components/Header";
import TopicCard from "../components/TopicCard";
import apiCall from "../utils/apiCall";

import "../css/topics.css";

export default function Topics() {
  // retrieve all topics from api
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiCall("topics").then(({ status, data }) => {
      if (status === 200) {
        setTopics([...data.topics]);
        setIsLoading(false);
      }
    });
  }, []);

  return isLoading ? (
    <>
      <p>Loading topics...</p>
    </>
  ) : (
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
