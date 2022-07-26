import { useEffect, useState } from "react";
import apiCall from "../utils/apiCall";
import CommentCard from "./CommentCard";
import "../css/comments.css";

export default function CommentList({ id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (id) {
      apiCall(`articles/${id}/comments`).then(({ data }) => {
        // sort comments by date (asc)
        const sortedComments = data.comments.sort((a, b) => {
          return new Date(a.created_at) - new Date(b.created_at);
        });

        setComments([...sortedComments]);
      });
    }
  }, [id]);

  return (
    <>
      <h2 className="comment-header">Comments</h2>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </>
  );
}
