// eslint-disable-next-line
import React, { useState, useEffect } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setArticles(result);
      });
  }, []);

  return (
    <div className="Articles">
      {articles.map((article) => {
        return (
          <div className="Article" key={article.id}>
            <h2>{article.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
