import axios from "axios";

const instance = axios.create({
  baseURL: "https://nc-news-p3zx.onrender.com/api",
});

export const fetchAllArticles = (article) => {
    return instance
      .get("/articles")
      .then((response) => {
        return response.data.articles;
      });
  };

export const signIn = (username) => {
    return instance
    .get("/users")
    .then((response) => {
      const result = response.data.users.filter(user => user.username === username);

      if(result.length > 0) {
        return result[0]
      }

      return undefined

    });
}

export const getAllUsers = () => {
  return instance
  .get("/users")
  .then((response) => {
    return response.data.users;
  });
}

export const fetchArticleById = (article_id) => {
  return instance
  .get(`/articles/${article_id}`)
  .then((response) => {
    return response.data.article;
  })
}

export const fetchComments = (article_id) => {
  return instance
  .get(`/articles/${article_id}/comments`)
  .then((response) => {
    return response.data.comments;
  })

}

export const voteOnArticle = (article_id, voteType) => {
  return instance
  .patch(`/articles/${article_id}`, {inc_votes: voteType === "up" ? 1 : -1})
  .then((response) => {
    return response.data.article
  })
}

export const commentAdder = (article_id, comment) => {
  return instance
  .post(`/articles/${article_id}/comments`, comment)
  .then((response) => {
    return response.data.comment
  })
}
