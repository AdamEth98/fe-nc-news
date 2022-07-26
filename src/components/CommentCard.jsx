import { useState } from "react";
import apiPatch from "../utils/apiPatch";

export default function CommentCard({ comment }) {
  // date substring
  const created = comment.created_at.substring(0, 10) || "";

  const [votes, setVotes] = useState(comment.votes);
  const [prevVotes, setPrevVotes] = useState(votes);
  const [error, setError] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  // handle upvoting/downvoting for comments
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

    apiPatch(`comments/${comment.comment_id}`, { inc_votes })
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
    <section className="comment-card">
      <div className="comment-top">
        <div className="comment-author">
          <p>{comment.author}</p>
          <p>{created}</p>
        </div>
        <div className="comment-votes">
          <button id="upvote" onClick={(e) => handleVote(e)} disabled={disableButton ? "disabled" : ""}>
            <i className="fa-solid fa-arrow-up" id="upvote"></i>
          </button>
          <p>{votes}</p>
          <button id="downvote" onClick={(e) => handleVote(e)} disabled={disableButton ? "disabled" : ""}>
            <i className="fa-solid fa-arrow-down"></i>
          </button>
          {error ? <p>{error}</p> : ""}
        </div>
      </div>
      <div className="comment-body">
        <p>{comment.body}</p>
      </div>
    </section>
  );
}
