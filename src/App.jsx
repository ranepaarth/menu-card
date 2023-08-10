import React, { useState } from "react";
import HeaderButtons from "./HeaderButtons";
import Menu from "./Menu";
import items from "./data.js";

const allCategory = items.map((item) => item.category);

const newCategory = ['all',...new Set(allCategory)]

console.log(newCategory);


const App = () => {
  const [menuItems, setMenuItems] = useState(items);

  const [categories, setCategories] = useState(newCategory);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <div className="title">
        <h1>Our Menu</h1>
        <div className="text-underline"></div>
      </div>
      <div className="btn-container">
        <HeaderButtons categories = {categories} filterItems={filterItems} />
      </div>
      <Menu menuItems={menuItems} />
    </>
  );
};

export default App;
