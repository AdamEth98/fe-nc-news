import { Link } from "react-router-dom"
import "../css/article-card.css"

export default function ArticleCard({article}){
  return (
    <article className="article-card">
      <section className="article-card-top">
        <h2 className="article-card-title">{article.title}</h2>
        <div className="article-card-middle">
          <div className="article-card-left">
            <p className="article-card-author">{article.author}</p>
            <p className="article-card-date">{article.created_at.substring(0, 10)}</p>
          </div>
          <div className="article-card-right">
            <p className="article-card-topic">{article.topic}</p>
            <p className="article-card-votes">{article.votes}</p>
          </div>
        </div>
          <div className="article-card-link">
            <Link to={`/article/${article.article_id}`}>Read Article -&#62;</Link>
          </div>
      </section>
    </article>
  )
}