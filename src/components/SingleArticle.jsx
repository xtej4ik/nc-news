import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../api';
import '../styles.css'
import Comments from './Comments';
import { voteOnArticle } from '../api';

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
        } else if (hasVoted && voteType !== article.voteType) {
          const newVotesCount = voteType === 'up' ? article.votes + 2 : article.votes - 2;
          setArticle({ ...article, votes: newVotesCount, voteType });
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
            <h2>Article</h2>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <ul>
            <div key={article.article_id} className="article">
                <img src={article.article_img_url} alt="article" className="responsive-img"></img>
                <h4>Title: {article.title}</h4>
                <section>Topic: {article.topic}</section>
                <p>Author: {article.author}</p>
                <p>Body: {article.body}</p>
                <time>Created at: {article.created_at}</time>
                <p> Votes: {article.votes} &nbsp;
                <button onClick={() => handleVote('up')}>Up</button>
                <button onClick={() => handleVote('down')}>Down</button>
                </p>{voteError && <p>Error: {voteError}</p>}
                <Comments article_id={article_id} />
            </div>
            </ul>
            )}
        </section>
    )
}
   


  export default SingleArticle;