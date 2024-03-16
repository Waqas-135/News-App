import { useState } from "react";
import { useEffect } from "react";
import NewsItem from "./NewsItem";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div className="container my-3">
      <h4 className="text-center py-2">
        Latest <span className="badge bg-danger">News</span>
      </h4>
      <h6 className="text-center badge bg-success">{category}</h6>
      <div className="row">
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              source={news.source.name}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default News;
