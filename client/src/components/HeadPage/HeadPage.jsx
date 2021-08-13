import React from "react";
import "./headPage.css";
import {Link} from "react-router-dom";
export default function HeadPage({direction}) {
  return (
    <div className="head-page">
      <Link to="/">home</Link> / <Link to={"/" + direction}>{direction}</Link>
    </div>
  );
}
