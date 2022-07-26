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
    } else {
      inc_votes--;
      setPrevVotes(votes);
      setVotes(votes - 1);
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
            <p>{article.author}</p>
            <p>{article.created_at ? article.created_at.substring(0, 10) : ""}</p>
          </div>
          <div className="article-info">
            <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
            <div className="article-votes">
              <button id="upvote" onClick={(e) => handleVote(e)} disabled={disableButton ? "disabled" : ""}>
                <i className="fa-solid fa-arrow-up" id="upvote"></i>
              </button>
              <p>{votes}</p>
              <button id="downvote" onClick={(e) => handleVote(e)} disabled={disableButton ? "disabled" : ""}>
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
