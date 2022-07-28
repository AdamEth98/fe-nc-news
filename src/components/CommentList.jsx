import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import CommentCard from "./CommentCard";
import "../css/comments.css";
import CommentForm from "./CommentForm";

export default function CommentList({ id, user }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(false);

  useEffect(() => {
    if (id) {
      apiGet(`articles/${id}/comments`).then(({ data }) => {
        // sort comments by date (asc)
        const sortedComments = data.comments.sort((a, b) => {
          return new Date(a.created_at) - new Date(b.created_at);
        });

        setComments([...sortedComments]);
        setNewComment(false);
      });
    }
  }, [id, newComment]);

  return (
    <>
      <h2 className="comment-header">Comments</h2>
      {user && <CommentForm user={user} setNewComment={setNewComment} id={id} />}
      {comments.map((comment) => {
        return <CommentCard user={user} key={comment.comment_id} comment={comment} />;
      })}
    </>
  );
}
