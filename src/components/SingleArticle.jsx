import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../api';
import '../styles.css'
import Comments from './Comments';

const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const { article_id } = useParams();
    const [isLoading, setLoading] = useState(true);  

    useEffect(() => {
        fetchArticleById(article_id).then((articleData) => {
          setArticle(articleData);
          setLoading(false);
        });
      }, [article_id]);


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
                <p>Votes: {article.votes}</p>
                <p>Comments: {article.comments}</p>
                <Comments article_id={article_id} />
            </div>
            </ul>
            )}
        </section>
    )
}
   


  export default SingleArticle;