import React, { useContext } from "react";
import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { ThemeContext } from "../../context";

export const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({
      type: "TOGGLE",
    });
  };
  return (
    <div
      className="t"
      style={{ backgroundColor: theme.state.darkMode && "black" }}
    >
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? "0" : "25px" }}
      ></div>
    </div>
  );
};
