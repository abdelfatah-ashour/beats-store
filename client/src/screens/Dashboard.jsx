import React from "react";
import {Link} from "react-router-dom";
import SEO from "../components/SEO/SEO.jsx";

export default function Dashboard() {
  return (
    <SEO title="Dashboard">
      <div style={{height: "100vh", width: "100%"}}>
        <h2>Dashboard</h2>
        <br />
        <Link to="/dashboard/upload-product">upload</Link>
      </div>
    </SEO>
  );
}
