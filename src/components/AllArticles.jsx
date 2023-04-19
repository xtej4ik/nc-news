import { useEffect, useState } from "react";
import { fetchAllArticles } from "../api";
import '../styles.css'
import { Link } from 'react-router-dom';

const AllArticles = ({ user }) => {
    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(true);  
   
  useEffect(() => {
    fetchAllArticles().then((articles) => {
      setList(articles);
      setLoading(false);
    });
  }, [user]);

    return (
        <section id="articles">
        <h2>All Articles</h2>
        {isLoading ? (
        <h3>Loading...</h3>
         ) : (
        <ul>
          {list.map((article) => {
                return (
                  <div key={article.article_id} className="article">
                      <Link to={`/articles/${article.article_id}`}> <img src={article.article_img_url} alt="article" className="responsive-img"></img>
                      </Link>
                      <Link to={`/articles/${article.article_id}`}>
                      <h4>Title: {article.title}</h4>
                      </Link>
                      <section>Topic: {article.topic}</section>
                      <p>Author: {article.author}</p>
                      <p>Body: {article.body}</p>
                  </div>
              );
            })}
        </ul>
          )}
        </section>
    );
};

export default AllArticles;