import { useEffect, useState } from "react";
import { fetchAllArticles } from "../api";
import '../styles.css'

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
        <ul style={{paddingInline:0}}>
          {list.map((article) => {
                return (
                    <li key={article.article_id} className="article">
                        <img src={article.article_img_url} alt="article image" className="responsive-img"></img>
                        <h4>Title: {article.title}</h4>
                        <p>Topic: {article.topic}</p>
                        <p>Author: {article.author}</p>
                        <p>Body: {article.body}</p>
                        <p>Created at: {article.created_at}</p>
                        <p>Votes: {article.votes}</p>
                        <p>Comments: {article.comments}</p>
                    </li>
                );
            })}
        </ul>
    )}
    </section>
  );
};

export default AllArticles;