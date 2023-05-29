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
      <section id="articles" >
        {isLoading ? (
        <h2 className="spinner" ></h2>
         ) : (
        <ul className="article-list">
          {list.map((article) => {
                return (
                  <div key={article.article_id} className="articles">
                      <Link to={`/articles/${article.article_id}`}> <img src={article.article_img_url} alt="article" className="responsive-img"></img>
                      </Link>
                      <Link to={`/articles/${article.article_id}`}>
                      <p className="articleTitle">{article.title} </p>
                      </Link>
                  </div>
              );
            })}
        </ul>
          )}
        </section>
    );
};

export default AllArticles;