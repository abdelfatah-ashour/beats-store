import React from "react";
import { Link, useHistory } from "react-router-dom";
import ERROR from "../assets/imgs/404.svg";
import SEO from "../components/SEO/SEO.jsx";

export default function PageNotFound() {
  const Router = useHistory();
  setTimeout(() => {
    Router.push("/");
  }, 3000);

  return (
    <SEO title="404 | Page Not Found">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <div
          className="wrapper-img"
          style={{ width: "400px", height: "300px" }}
        >
          <img
            src={ERROR}
            alt="page not found"
            loading="lazy"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="wrapper-content">
          <Link
            to="/"
            style={{
              fontSize: "16px",
              textAlign: "center",
              wordBreak: "break-word",
              color: "#000",
              textTransform: "capitalize",
            }}
          >
            automatically return to home page after 3 seconds...
          </Link>
        </div>
      </div>
    </SEO>
  );
}
