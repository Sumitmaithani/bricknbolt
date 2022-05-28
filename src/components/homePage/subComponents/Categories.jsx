import React, { useState } from "react";

const Categories = () => {

  return (
    <div className="category-buttons">
      <button className="category-button" autoFocus>Ice Creams</button>
      <button className="category-button">Snacks</button>
      <button className="category-button">Coffee</button>
      <button className="category-button">Sweet Cakes</button>
    </div>  
  );
};

export default Categories;
