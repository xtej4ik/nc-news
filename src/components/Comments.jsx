import { useContext, useEffect, useState } from "react";
import { fetchComments, commentAdder } from "../api"
import "../styles.css"
import { UserContext } from "../contexts/User";

function Comments({ article_id }) {
  const [isLoading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [isExpanded, setExpanded] = useState(false);

  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [newComment, setNewComment] = useState('');
  const user = useContext(UserContext)

  useEffect(() => {
    fetchComments(article_id).then((commentsData) => {
      setComments(commentsData);
      setLoading(false);
    });
  }, [article_id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newComment.trim() === '') {
      setSubmitError("Oops! You forgot to write a comment.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    commentAdder(article_id, { body: newComment, username: user.username })
      .then((response) => {
        setComments((prevComments) => [...prevComments, response]);
        setCommentSubmitted(true);
        setNewComment("");
      })
      .catch((error) => {
        setSubmitError(error.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleToggleClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <section id="comments">
      {user ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Add a new comment:
              <textarea
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
              />
            </label>
            {submitError && <p>Error: {submitError}</p>}
            <button type="submit" disabled={isSubmitting}>Submit</button>
            {commentSubmitted && <p>Comment submitted!</p>}
          </form>
        </div>
      ) : (
        <p>Sorry, only registered users can comment. Please log in to participate</p>
      )}
      <button className="accordion" onClick={handleToggleClick}>
        {isExpanded ? "Hide comments" : "Show comments"}
      </button>
      <div className={`panel ${isExpanded ? "expanded" : ""}`}>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : comments.length === 0 ? (
          <p>No comments</p>
        ) : (
          <ul>
           {comments.slice().reverse().map((comment) => (
              <li key={comment.comment_id}>
                <p>{comment.body}</p>
                <p>Author: {comment.author}</p>
                <time>Created at: {comment.created_at}</time>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Comments;
