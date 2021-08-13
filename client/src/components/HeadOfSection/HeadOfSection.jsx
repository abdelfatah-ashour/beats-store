/* eslint-disable react/prop-types */
import React from "react";
import "./HeadOfSection.css";

export default function HeadOfSection({main, sub}) {
  return (
    <div className="Head_Of_Section">
      <h6>{sub}</h6>
      <h3>{main}</h3>
    </div>
  );
}
