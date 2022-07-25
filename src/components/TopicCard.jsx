import { Link } from "react-router-dom";

export default function TopicCard({topic}) {
  return (
    <article className="topic-card-con">
      <h2>{topic.slug}</h2>
      <p>{topic.description}</p>
      <Link to={`/topics/${topic.slug}`}>{'View Articles ->'}</Link>
    </article>
  )
}