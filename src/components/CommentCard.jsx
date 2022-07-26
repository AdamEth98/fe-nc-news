export default function CommentCard({ comment }) {
  // date substring
  const created = comment.created_at.substring(0, 10) || "";
  return (
    <section className="comment-card">
      <div className="comment-top">
        <div className="comment-author">
          <p>{comment.author}</p>
          <p>{created}</p>
        </div>
        <div className="comment-votes">
          <button id="upvote">
            <i className="fa-solid fa-arrow-up" id="upvote"></i>
          </button>
          <p>{comment.votes}</p>
          <button id="downvote">
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
      <div className="comment-body">
        <p>{comment.body}</p>
      </div>
    </section>
  );
}
