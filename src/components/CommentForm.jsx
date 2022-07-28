import { useState } from "react";
import { apiPost } from "../utils/api";

export default function CommentForm({ user, id, setNewComment }) {
  const [error, setIsError] = useState(null);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [addedComment, setAddedComment] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user && e.target[1].value) {
      setDisableSubmit(true);
      const requestBody = {
        username: user.username,
        body: e.target[1].value,
      };

      apiPost(`articles/${id}/comments`, requestBody)
        .then(() => {
          e.target[1].value = "";
          setNewComment(true);
          setIsError(null);
          setAddedComment(true);
          setDisableSubmit(false);
        })
        .catch(() => {
          setIsError("Failed to add comment.");
          setAddedComment(false);
          setDisableSubmit(false);
        });
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset disabled={disableSubmit ? "disabled" : ""}>
        <label htmlFor="comment-text">Add Comment</label>
        <div className="input-con">
          <input type="text" name="comment-text" id="comment-text" required></input>
          <button type="submit" id="submit-btn">
            Add
          </button>
        </div>
        {error ? <p>{error}</p> : ""}
        {addedComment ? <p>Comment added.</p> : ""}
      </fieldset>
    </form>
  );
}
