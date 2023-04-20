import { useEffect, useState } from "react";
import { fetchComments } from "../api"
import "../styles.css"

function Comments({article_id}) {
    const [isLoading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [isExpanded, setExpanded] = useState(false);


    useEffect(() => {
        fetchComments(article_id)
        .then((commentsData) => {
            setComments(commentsData)
            setLoading(false)
        })
    }, [article_id])

    const handleToggleClick = () => {
        setExpanded(!isExpanded);
    };

    return (
        <section id="comments">
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
                        {comments.map((comment) => (
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