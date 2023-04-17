import axios from "axios";

export const fetchAllArticles = (article) => {
    return axios
      .get(`https://nc-news-p3zx.onrender.com/api/articles`)
      .then((response) => {
        return response.data.articles;
      });
  };

export const signIn = (username) => {
    return axios
    .get(`https://nc-news-p3zx.onrender.com/api/users`)
    .then((response) => {
      const result = response.data.users.filter(user => user.username === username);

      if(result.length > 0) {
        return result[0]
      }

      return undefined

    });
}