import { useEffect, useState } from "react";
import { fetchAllArticles } from "../api";
import { useNavigate } from "react-router-dom";



const AllArticles = ({ user }) => {

    const navigate = useNavigate()

    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    

   
  useEffect(() => {
    if(!user) {
        navigate('/sign-in')
    }
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
                    <li key={article.article_id}>
                        <h4>{article.item_name}</h4>
                        <img src={article.img_url}></img>
                        <p>Title: {article.title}</p>
                        <p>Topic: {article.topic}</p>
                        <p>Author: {article.author}</p>
                        <p>Body: {article.body}</p>
                        <p>Created at: {article.created_at}</p>
                        <p>Votes: {article.votes}</p>
                    </li>
                );
            })}
        </ul>
    )}
    </section>
  );
};

export default AllArticles;