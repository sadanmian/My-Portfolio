import React from "react";
import "./productList.css";
import { Product } from "../product/Product";
import { products } from "../../data";

export const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          Unleashing Creativity with React: Front-End Project Showcase
        </h1>
        <p className="pl-desc">
          Explore my portfolio showcasing captivating front-end projects built
          with React. From dynamic user interfaces to responsive web
          applications, witness innovation and expert craftsmanship in every
          project, reflecting my dedication to pushing the boundaries of what's
          achievable in React development.
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
