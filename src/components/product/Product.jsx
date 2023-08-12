import React, { useContext } from "react";
import "./product.css";
import { ThemeContext } from "../../context";

export const Product = ({ e }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="p" style={{ border: darkMode && "#333" }}>
      <div
        className="p-browser"
        style={{ backgroundColor: darkMode && "#333" }}
      >
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
