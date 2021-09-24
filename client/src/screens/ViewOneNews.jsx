import React from "react";
import {useParams} from "react-router-dom";
import news from "../utilities/new-api.json";
import "../assets/css/ViewOneNews.css";

export default function ViewOneNews() {
  const {newsId} = useParams();

  return (
    <div className="one-news">
      {news
        .filter(item => item._id === newsId)
        .map(article => {
          return (
            <React.Fragment key={article._id}>
              <div className="view-img">
                <img
                  src={process.env.REACT_APP_API + "/" + article.imageOfArticle}
                  alt={article.head}
                />
              </div>
              <div className="wrapper-news">
                <h6>👑 {article.author} </h6>
                <h3>📢 {article.head}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  className="content-news"
                ></div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}
