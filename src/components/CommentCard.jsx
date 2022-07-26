import { useState } from "react";
import { apiPatch, apiDelete } from "../utils/api";

export default function CommentCard({ comment, user, setDeletedComment }) {
  // date substring
  const created = comment.created_at.substring(0, 10) || "";

  const [votes, setVotes] = useState(comment.votes);
  const [prevVotes, setPrevVotes] = useState(votes);
  const [error, setError] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  const [disableDeleteButton, setDisableDeleteButton] = useState(false);
  const [isDeleteError, setIsDeleteError] = useState(null);
  const [confirmedDeleted, setConfirmedDeleted] = useState(false);

  // track if comment was upvoted or downvoted (true/false)
  const [upvoted, setUpvoted] = useState(null);

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
      setUpvoted(true);
    } else {
      inc_votes--;
      setPrevVotes(votes);
      setVotes(votes - 1);
      setUpvoted(false);
    }

    apiPatch(`comments/${comment.comment_id}`, { inc_votes })
      .then(() => {
        setError(null);
      })
      .catch(() => {
        setError("Vote not applied!");
        setVotes(prevVotes);
        setDisableButton(false);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setDisableDeleteButton(true);

    apiDelete(`comments/${comment.comment_id}`)
      .then(({ status }) => {
        setConfirmedDeleted(true);
      })
      .catch(() => {
        setDisableDeleteButton(false);
        setIsDeleteError("Unable to delete comment");
      });
  };

  return (
    <section className="comment-card">
      {confirmedDeleted ? (
        <p className="comment-deleted">Comment deleted </p>
      ) : (
        <>
          <div className="comment-top">
            <div className="comment-author">
              <p>{comment.author}</p>
              <p>{created}</p>
            </div>
            <div className="comment-votes">
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
              {error ? <p>{error}</p> : ""}
            </div>
          </div>
          <div className="comment-body">
            <p>{comment.body}</p>
          </div>
          {user.name === comment.author ? (
            <>
              <div className="delete-cont">
                <button id="delete" onClick={(e) => handleDelete(e)} disabled={disableDeleteButton ? "disabled" : ""}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
              <div className="delete-error">{isDeleteError ? isDeleteError : ""}</div>
            </>
          ) : (
            ""
          )}
        </>
      )}
    </section>
  );
}
