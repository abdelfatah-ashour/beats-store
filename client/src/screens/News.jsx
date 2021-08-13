import React from "react";
import HeadPage from "../components/HeadPage/HeadPage";
import SEO from "../components/SEO/SEO.jsx";
import newApi from "../utilities/new-api.json";
import {BiLink} from "react-icons/bi";
import {Link} from "react-router-dom";
import "../assets/css/News.css";

export default function news() {
  return (
    <SEO title="News">
      <HeadPage direction="news" />
      <div className="news">
        {newApi.map(oneNews => {
          return (
            <div key={oneNews._id} className="one-item">
              <div className="wrapper-img">
                <img
                  src={process.env.API + "/" + oneNews.imageOfArticle}
                  alt={oneNews.author}
                  loading="lazy"
                />
                <div className="overlay-news"></div>
              </div>
              <h6 className="head-article">
                📢 {String(oneNews.head).slice(0, 55)}
                <Link to={"/news/" + oneNews._id} className="link-news">
                  <BiLink />
                </Link>
              </h6>
            </div>
          );
        })}
      </div>
    </SEO>
  );
}
