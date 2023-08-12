import React from "react";
import "./productList.css";
import { Product } from "../product/Product";
import { products } from "../../data";

export const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Sadan</h1>
        <p className="pl-desc">
          Sadan is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((e) => (
          <Product key={e.id} e={e} />
        ))}
      </div>
    </div>
  );
};
