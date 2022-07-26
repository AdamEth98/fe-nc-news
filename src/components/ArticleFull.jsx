import { Link } from "react-router-dom";
import "../css/article.css"

export default function ArticleFull({article}){
  return (
    <>
      <article className="full-article container">
        <section className="article-top">
          <div className="article-author">
            <p>{article.author}</p>
            <p>
              {article.created_at ? article.created_at.substring(0, 10) : ""}
            </p>
          </div>
          <div className="article-info">
            <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
            <p>{article.votes}</p>
          </div>
        </section>
        <p className="article-content">{article.body}</p>
      </article>
    </>
  )
}