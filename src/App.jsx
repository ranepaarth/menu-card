import React, { useState } from "react";
import HeaderButtons from "./HeaderButtons";
import Menu from "./Menu";
import items from "./data.js";

// const Router = createBrowserRouter();

const App = () => {
  const [menuItems, setMenuItems] = useState(items);

  // const [categories, setCategories] = useState([]);

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
        <HeaderButtons menuItems = {menuItems} filterItems={filterItems} />
      </div>
      <Menu menuItems={menuItems} />
    </>
  );
};

export default App;
