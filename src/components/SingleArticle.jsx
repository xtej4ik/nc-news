import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../api';

const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const { article_id } = useParams();

    useEffect(() => {
        fetchArticleById(article_id).then((articleData) => {
          setArticle(articleData);
        });
      }, [article_id]);

    return (
        <li key={article.article_id} className="article">
        <img src={article.article_img_url} alt="article" className="responsive-img"></img>
        <h4>Title: {article.title}</h4>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>Body: {article.body}</p>
        <p>Created at: {article.created_at}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comments}</p>
    </li>
    );
  };


  export default SingleArticle;