import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/article.css";
import apiPatch from "../utils/apiPatch";

export default function ArticleFull({ article }) {
  // store votes for optimistic rendering
  const [votes, setVotes] = useState(article.votes);
  // store previous value of votes to revert to in case of error
  const [prevVotes, setPrevVotes] = useState(votes);
  // store any possible errors from voting
  const [error, setError] = useState(null);
  // enable/disable buttons after voting
  const [disableButton, setDisableButton] = useState(false);
  // track if post was upvoted or downvoted (true/false)
  const [upvoted, setUpvoted] = useState(null);

  // make patch request depending on the id of the upvote/downvote button clicked
  const handleVote = (e) => {
    e.preventDefault();

    // disable buttons whilst waiting for response
    setDisableButton(true);

    // change inc_votes depending on the target clicked
    let inc_votes = 0;
    if (e.currentTarget.id === "upvote") {
      inc_votes++;
      setPrevVotes(votes);
      setVotes(votes + 1);
      setUpvoted(true);
    } else {
      inc_votes--;
      setPrevVotes(votes);
      setVotes(votes - 1);
      setUpvoted(false);
    }

    apiPatch(`articles/${article.article_id}`, { inc_votes })
      .then(() => {
        setError(null);
      })
      .catch((err) => {
        setError("Vote not applied!");
        setVotes(prevVotes);
        setDisableButton(false);
      });
  };

  return (
    <>
      <article className="full-article container">
        <section className="article-top">
          <div className="article-author">
            <p className="author-text">
              Written by <span className="author-name">{article.author}</span>
            </p>
            <p className="date-text">
              Posted: <span className="date">{article.created_at ? article.created_at.substring(0, 10) : ""}</span>
            </p>
            <Link className="article-topic" to={`/topics/${article.topic}`}>
              Topic:
              <span className="article-topic-text">
                {article.topic ? ` ${article.topic[0].toUpperCase() + article.topic.substring(1)}` : ""}
              </span>
            </Link>
          </div>
          <div className="article-info">
            <div className="article-votes">
              <button
                className={upvoted === true ? "upvoted" : null}
                id="upvote"
                onClick={(e) => handleVote(e)}
                disabled={disableButton ? "disabled" : ""}
              >
                <i className="fa-solid fa-arrow-up" id="upvote"></i>
              </button>
              <p>{votes}</p>
              <button
                className={upvoted === false ? "downvoted" : null}
                id="downvote"
                onClick={(e) => handleVote(e)}
                disabled={disableButton ? "disabled" : ""}
              >
                <i className="fa-solid fa-arrow-down"></i>
              </button>
            </div>
            {error ? <p>{error}</p> : ""}
          </div>
        </section>
        <p className="article-content">{article.body}</p>
      </article>
    </>
  );
}
