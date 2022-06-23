/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';

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
  let count = 0;
  return (
    <div className="Articles">
      {articles.map((article) => {
        if (count === 20) {
          return null;
        }
        count++;
        return (
          <div className="Article" key={article.id}>
            <h4>{article.title}</h4>
            <p>{article.body.substring(0, 60)}... <a>afficher la suite</a></p>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
