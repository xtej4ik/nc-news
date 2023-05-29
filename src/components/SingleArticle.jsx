import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../api';
import '../styles.css'
import Comments from './Comments';
import { voteOnArticle } from '../api';
import { FaSmile, FaRegSadCry } from 'react-icons/fa';
import { formatDate } from "../utils"

const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const { article_id } = useParams();
    const [isLoading, setLoading] = useState(true);  
    const [voteError, setVoteError] = useState(null);
    const [hasVoted, setHasVoted] = useState(false);


    useEffect(() => {
        fetchArticleById(article_id).then((articleData) => {
          setArticle(articleData);
          setLoading(false);
        });
      }, [article_id]);

      const handleVote = (voteType) => {
        if (hasVoted && voteType === article.voteType) {
          setVoteError("Oooops! You have already voted once!");
          return;
        } else {
          const newVotesCount = voteType === 'up' ? article.votes + 1 : article.votes - 1;
          setArticle({ ...article, votes: newVotesCount, voteType });
          setHasVoted(true);
          voteOnArticle(article_id, voteType)
                .catch((error) => {
                    setVoteError(error.message);
                    setArticle({ ...article, votes: article.votes });
                    setHasVoted(false);
                });
        }
    };

    return (
        <section id="article">
            {isLoading ? (
                <h3 className="spinner"></h3>
            ) : (
                <ul>
            <div key={article.article_id} className="article-card">
                <h4>{article.title}</h4>
                <img src={article.article_img_url} alt="article" className="responsive-img"></img>
                <p>{article.body}</p>
                <p>Written by {article.author}</p>
                <time>Created at: {formatDate(article.created_at)}</time>
                <p> Votes: {article.votes} &nbsp;
                <button className="votesUp" onClick={() => handleVote('up')}><FaSmile></FaSmile></button>
                <button className="votesDown" onClick={() => handleVote('down')}><FaRegSadCry></FaRegSadCry></button>
                </p>{voteError && <p>Error: {voteError}</p>}
                <Comments article_id={article_id} />
            </div>
            </ul>
            )}
        </section>
    )
}
   


  export default SingleArticle;