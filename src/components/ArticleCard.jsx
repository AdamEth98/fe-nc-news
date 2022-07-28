import { Link } from "react-router-dom";
import "../css/article-card.css";

export default function ArticleCard({ article }) {
  return (
    <article className="article-card container">
      <section className="article-card-top">
        <h2 className="article-card-title">{article.title}</h2>
        <div className="article-card-middle">
          <div className="article-card-left">
            <p className="article-card-author">{article.author}</p>
            <p className="article-card-date">{article.created_at.substring(0, 10)}</p>
          </div>
          <div className="article-card-right">
            <p className="article-card-topic">
              {article.topic ? article.topic[0].toUpperCase() + article.topic.substring(1) : ""}
            </p>
            <p className="article-card-votes">{article.votes} Votes</p>
          </div>
        </div>
        <div className="article-card-link">
          <p>{article.comment_count} Comments</p>
          <Link to={`/article/${article.article_id}`}>Read Article -&#62;</Link>
        </div>
      </section>
    </article>
  );
}
