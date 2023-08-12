import React from "react";
import "./product.css";

export const Product = ({ e }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={e.link} target="_blank" rel="noreferrer">
        <img src={e.img} alt="" className="p-img" />
      </a>
    </div>
  );
};
